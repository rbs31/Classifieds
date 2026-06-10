#!/usr/bin/env node
/**
 * Classifieds 数据更新脚本 — 从 Craigslist 爬取真实数据
 * 覆盖北美多个城市，包含华人、韩人、西语、越南等多语言社区分类信息
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Craigslist 搜索 URL 配置
const SOURCES = [
  // Housing
  { city: 'New York',      site: 'newyork',    cat: 'apa', label: 'Housing' },
  { city: 'Los Angeles',   site: 'losangeles', cat: 'apa', label: 'Housing' },
  { city: 'San Francisco', site: 'sfbay',      cat: 'apa', label: 'Housing' },
  { city: 'Toronto',       site: 'toronto',    cat: 'apa', label: 'Housing' },
  { city: 'Vancouver',     site: 'vancouver',  cat: 'apa', label: 'Housing' },
  { city: 'Seattle',       site: 'seattle',    cat: 'apa', label: 'Housing' },
  { city: 'Chicago',       site: 'chicago',    cat: 'apa', label: 'Housing' },
  { city: 'Houston',       site: 'houston',    cat: 'apa', label: 'Housing' },
  { city: 'Boston',        site: 'boston',     cat: 'apa', label: 'Housing' },
  { city: 'Miami',         site: 'miami',      cat: 'apa', label: 'Housing' },
  // Services
  { city: 'New York',      site: 'newyork',    cat: 'srv', label: 'Services' },
  { city: 'Los Angeles',   site: 'losangeles', cat: 'srv', label: 'Services' },
  { city: 'San Francisco', site: 'sfbay',      cat: 'srv', label: 'Services' },
  { city: 'Toronto',       site: 'toronto',    cat: 'srv', label: 'Services' },
  // For Sale
  { city: 'New York',      site: 'newyork',    cat: 'sss', label: 'For Sale' },
  { city: 'Los Angeles',   site: 'losangeles', cat: 'sss', label: 'For Sale' },
  { city: 'San Francisco', site: 'sfbay',      cat: 'sss', label: 'For Sale' },
  // Vehicles
  { city: 'New York',      site: 'newyork',    cat: 'cta', label: 'Vehicles' },
  { city: 'Los Angeles',   site: 'losangeles', cat: 'cta', label: 'Vehicles' },
];

// 社区关键词 → 语言映射
const COMMUNITY_LANGS = {
  'New York': {
    'flushing': ['zh'], 'chinatown': ['zh'], 'sunset park': ['zh'],
    'forest hills': ['zh'], 'elmhurst': ['zh'], 'jackson heights': ['zh'],
    'washington heights': ['es'], 'koreatown': ['ko'],
  },
  'Los Angeles': {
    'koreatown': ['ko'], 'monterey park': ['zh'], 'alhambra': ['zh'],
    'san gabriel': ['zh'], 'arcadia': ['zh'], 'temple city': ['zh'],
    'rowland heights': ['zh'], 'little tokyo': ['ja'],
    'east la': ['es'], 'boyle heights': ['es'],
    'westminster': ['vi'], 'little saigon': ['vi'],
  },
  'San Francisco': {
    'chinatown': ['zh'], 'richmond': ['zh'], 'sunset': ['zh'],
    'mission': ['es'], 'japantown': ['ja'],
  },
  'Toronto': {
    'chinatown': ['zh'], 'markham': ['zh'], 'richmond hill': ['zh'],
    'scarborough': ['zh'], 'north york': ['zh', 'ko'], 'koreatown': ['ko'],
  },
  'Vancouver': {
    'chinatown': ['zh'], 'richmond': ['zh'], 'burnaby': ['zh'],
    'coquitlam': ['zh', 'ko'], 'surrey': ['zh', 'vi'], 'koreatown': ['ko'],
  },
  'Seattle': {
    'international district': ['zh', 'ja', 'vi'], 'beacon hill': ['vi'],
  },
  'Chicago': { 'chinatown': ['zh'], 'pilsen': ['es'] },
  'Houston': { 'chinatown': ['zh'], 'sharpstown': ['zh', 'vi'], 'koreatown': ['ko'] },
  'Boston': { 'chinatown': ['zh'], 'allston': ['zh'], 'east boston': ['es'] },
  'Miami': { 'little havana': ['es'], 'hialeah': ['es'] },
};

// 分类映射
const CAT_MAP = {
  'Housing': 'housing', 'Services': 'services',
  'For Sale': 'items', 'Vehicles': 'vehicles',
};

// ============ HTTP 爬取 ============

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      timeout: 15000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject)
      .on('timeout', () => { reject(new Error('Timeout')); });
  });
}

// 从 Craigslist HTML 提取列表（使用 cl-static-search-result 结构）
function parseCraigslist(html, city, label) {
  const listings = [];

  // 方法 1: 解析 cl-static-search-result <li> 块
  const blockRegex = /<li[^>]*class="cl-static-search-result[^"]*"[^>]*>([\s\S]*?)<\/li>/g;
  let match;
  while ((match = blockRegex.exec(html)) !== null) {
    const block = match[1];

    // 提取标题
    const titleMatch = block.match(/<div[^>]*class="title[^"]*"[^>]*>([\s\S]*?)<\/div>/);
    const title = titleMatch ? titleMatch[1].trim() : '';
    if (!title || title.length < 5) continue;

    // 提取链接
    const linkMatch = block.match(/<a[^>]*href="([^"]+)"[^>]*>/);
    const link = linkMatch ? linkMatch[1] : '';

    // 提取价格
    const priceMatch = block.match(/<div[^>]*class="price[^"]*"[^>]*>([\s\S]*?)<\/div>/);
    const price = priceMatch ? priceMatch[1].trim() : '';

    // 提取位置
    const locMatch = block.match(/<div[^>]*class="location[^"]*"[^>]*>([\s\S]*?)<\/div>/);
    const location = locMatch ? locMatch[1].trim() : '';

    // 检测语言
    const languages = detectLangs(title, location, city);
    const category = CAT_MAP[label] || 'items';

    listings.push({ title, price, location, city, languages, category, link });
  }

  // 方法 2: 如果方法 1 没有结果，尝试 JSON-LD 数据
  if (listings.length === 0) {
    const ldMatch = html.match(/<script type="application\/ld\+json" id="ld_searchpage_results"[^>]*>([\s\S]*?)<\/script>/);
    if (ldMatch) {
      try {
        const ldData = JSON.parse(ldMatch[1]);
        if (ldData.itemListElement) {
          for (const entry of ldData.itemListElement) {
            const item = entry.item || {};
            const title = item.name || '';
            if (!title || title.length < 5) continue;
            const location = item.address?.addressLocality || '';
            const languages = detectLangs(title, location, city);
            const category = CAT_MAP[label] || 'items';

            listings.push({
              title,
              price: '', // JSON-LD doesn't always include price
              location,
              city,
              languages,
              category,
              link: '',
            });
          }
        }
      } catch (e) { /* JSON parse failed, skip */ }
    }
  }

  return listings;
}

// 语言检测
function detectLangs(title, location, city) {
  const langs = new Set(['en']);
  const combined = (title + ' ' + (location || '')).toLowerCase();

  // 从标题中的字符特征检测
  if (/[\u4e00-\u9fff]/.test(title)) langs.add('zh');
  if (/[\uac00-\ud7af\u3130-\u318f]/.test(title)) langs.add('ko');
  if (/[\u3040-\u30ff]/.test(title)) langs.add('ja');
  if (/[\u0900-\u097f]/.test(title)) langs.add('hi');

  // 从常见西语词汇检测
  if (/en venta|apartamento|se busca|abogado|cocinero|hermosa|familia|cerca de|casa|habitaci/i.test(title)) langs.add('es');
  // 从常见越南语词汇检测
  if (/cho thu\u00ea|nh\u00e0|ti\u1ec1n|khu|vi\u00ean|G\u1ea7n|ph\u00f2ng/i.test(title)) langs.add('vi');

  // 双语标题模式
  if (title.includes('/') && /[\u4e00-\u9fff]/.test(title)) langs.add('zh');
  if (title.includes('/') && /[\uac00-\ud7af]/.test(title)) langs.add('ko');

  // 从社区名称检测
  const comms = COMMUNITY_LANGS[city] || {};
  for (const [comm, commLangs] of Object.entries(comms)) {
    if (combined.includes(comm.toLowerCase())) {
      commLangs.forEach(l => langs.add(l));
    }
  }

  return [...langs];
}

// ============ 主函数 ============

async function main() {
  console.log('🛒 Classifieds 数据更新开始...');
  console.log(`⏰ 时间: ${new Date().toISOString()}`);

  const allListings = [];
  let id = 100;
  const today = new Date().toISOString().slice(0, 10);

  // 逐源爬取
  for (const src of SOURCES) {
    const url = `https://${src.site}.craigslist.org/search/${src.cat}`;
    console.log(`📡 爬取: ${url}`);

    try {
      const html = await fetchUrl(url);
      const parsed = parseCraigslist(html, src.city, src.label);

      // 每个源最多取 8 条
      const maxPerSource = 8;
      const selected = parsed.slice(0, maxPerSource);
      for (const item of selected) {
        allListings.push({
          id: id++,
          category: item.category,
          title: item.title,
          description: item.title + (item.location ? ` — ${item.location}` : ''),
          price: item.price || 'Contact for price',
          location: item.location || src.city,
          languages: item.languages,
          contact: 'See listing',
          posted: today,
          featured: Math.random() > 0.7,
        });
      }
      console.log(`  ✅ ${src.city}/${src.label}: ${selected.length} 条 (共解析 ${parsed.length} 条)`);
    } catch (err) {
      console.log(`  ❌ ${src.city}/${src.label}: ${err.message}`);
    }

    // 避免请求过快（1.5 秒间隔）
    await new Promise(r => setTimeout(r, 1500));
  }

  console.log(`\n📊 共收集 ${allListings.length} 条真实数据`);

  if (allListings.length === 0) {
    console.log('⚠️ 没有获取到数据，跳过构建和部署');
    process.exit(1);
  }

  // 写入数据文件
  const dataPath = path.join(__dirname, 'src', 'data.js');
  const dataContent = generateDataFile(allListings);
  fs.writeFileSync(dataPath, dataContent, 'utf-8');
  console.log('✅ 数据文件已更新');

  // 构建
  console.log('🔧 开始构建...');
  try {
    execSync('npm run build', { cwd: __dirname, stdio: 'inherit' });
    console.log('✅ 构建完成');
  } catch (e) {
    console.log('❌ 构建失败:', e.message);
    process.exit(1);
  }

  // 部署
  console.log('🚀 开始部署...');
  try {
    execSync('node ./node_modules/gh-pages/bin/gh-pages.js -d dist', { cwd: __dirname, stdio: 'inherit' });
    console.log('✅ 部署完成');
  } catch (e) {
    console.log('❌ 部署失败:', e.message);
  }

  console.log('\n🎉 数据更新完成!');
  console.log(`📊 共 ${allListings.length} 条真实数据已上线`);
}

// 生成 data.js 文件内容
function generateDataFile(listings) {
  return `// Language detection and mapping
export const LANGUAGES = {
  'zh': { code: 'zh', name: '中文', nameEn: 'Chinese', flag: '🇨🇳' },
  'es': { code: 'es', name: 'Español', nameEn: 'Spanish', flag: '🇪🇸' },
  'ko': { code: 'ko', name: '한국어', nameEn: 'Korean', flag: '🇰🇷' },
  'vi': { code: 'vi', name: 'Tiếng Việt', nameEn: 'Vietnamese', flag: '🇻🇳' },
  'tl': { code: 'tl', name: 'Filipino', nameEn: 'Filipino', flag: '🇵🇭' },
  'hi': { code: 'hi', name: 'हिन्दी', nameEn: 'Hindi', flag: '🇮🇳' },
  'ja': { code: 'ja', name: '日本語', nameEn: 'Japanese', flag: '🇯🇵' },
  'fr': { code: 'fr', name: 'Français', nameEn: 'French', flag: '🇫🇷' },
  'pt': { code: 'pt', name: 'Português', nameEn: 'Portuguese', flag: '🇧🇷' },
  'ru': { code: 'ru', name: 'Русский', nameEn: 'Russian', flag: '🇷🇺' },
  'ar': { code: 'ar', name: 'العربية', nameEn: 'Arabic', flag: '🇸🇦' },
  'en': { code: 'en', name: 'English', nameEn: 'English', flag: '🇺🇸' },
};

function mapBrowserLang(lang) {
  const code = lang.split('-')[0].toLowerCase();
  if (LANGUAGES[code]) return code;
  const variantMap = {
    'zh-cn': 'zh', 'zh-tw': 'zh', 'zh-hk': 'zh', 'zh-hans': 'zh', 'zh-hant': 'zh',
    'es-mx': 'es', 'es-419': 'es', 'es-es': 'es',
    'ko-kp': 'ko', 'ko-kr': 'ko',
    'pt-br': 'pt', 'pt-pt': 'pt',
    'fr-ca': 'fr', 'fr-fr': 'fr',
    'en-us': 'en', 'en-gb': 'en', 'en-ca': 'en',
  };
  const lower = lang.toLowerCase();
  if (variantMap[lower]) return variantMap[lower];
  return code;
}

export function detectUserLanguage() {
  const browserLangs = navigator.languages || [navigator.language || 'en'];
  for (const bl of browserLangs) {
    const mapped = mapBrowserLang(bl);
    if (LANGUAGES[mapped]) return mapped;
  }
  return 'en';
}

export const CATEGORIES = [
  { id: 'housing', icon: '🏠', name: 'Housing', nameZh: '房屋租售' },
  { id: 'jobs', icon: '💼', name: 'Jobs', nameZh: '找工作' },
  { id: 'vehicles', icon: '🚗', name: 'Vehicles', nameZh: '二手车' },
  { id: 'services', icon: '🔧', name: 'Services', nameZh: '服务' },
  { id: 'items', icon: '📦', name: 'For Sale', nameZh: '二手物品' },
  { id: 'community', icon: '👥', name: 'Community', nameZh: '社区' },
  { id: 'dating', icon: '❤️', name: 'Dating', nameZh: '交友' },
  { id: 'legal', icon: '⚖️', name: 'Legal & Immigration', nameZh: '法律移民' },
];

export const LOCATIONS = [
  'New York', 'Los Angeles', 'San Francisco', 'Toronto', 'Vancouver',
  'Chicago', 'Houston', 'Seattle', 'Boston', 'Washington DC',
  'Montreal', 'San Diego', 'Atlanta', 'Miami', 'Denver',
];

// Auto-updated listings (last update: ${new Date().toISOString()})
export const SAMPLE_LISTINGS = ${JSON.stringify(listings, null, 2)};
`;
}

main();