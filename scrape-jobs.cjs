/**
 * 华人资讯网招聘信息抓取器
 * 目标：从美国各城市华人资讯网站抓取招聘信息
 * 
 * 数据来源：
 * 1. 文学城 (wenxuecity.com) - 全美各城市
 * 2. 一亩三分地 (1point3acres.com) - 科技求职
 * 3. 华人168 (chinese168.com) - 分类信息
 * 4. 本地华人资讯网 (各城市)
 */

const https = require('https');
const http = require('http');

const CITIES = [
  { name: '纽约', site: 'newyork', zone: '东部' },
  { name: '洛杉矶', site: 'losangeles', zone: '西部' },
  { name: '旧金山', site: 'sanfrancisco', zone: '西部' },
  { name: '多伦多', site: 'toronto', zone: '加拿大' },
  { name: '温哥华', site: 'vancouver', zone: '加拿大' },
  { name: '芝加哥', site: 'chicago', zone: '中部' },
  { name: '休斯顿', site: 'houston', zone: '南部' },
  { name: '西雅图', site: 'seattle', zone: '西部' },
  { name: '波士顿', site: 'boston', zone: '东部' },
  { name: '迈阿密', site: 'miami', zone: '南部' },
];

const JOB_SOURCES = [
  // 文学城招聘频道（按城市）
  ...CITIES.map(c => ({
    name: `${c.name} - 文学城招聘`,
    url: `https://www.wenxuecity.com/classified/job/${c.site}/`,
    city: c.name,
    site: 'wenxuecity',
  })),

  // 一亩三分地求职版
  {
    name: '一亩三分地 - 全职工作',
    url: 'https://www.1point3acres.com/bbs/forum/29',
    city: '全美',
    site: '1point3acres',
  },
  {
    name: '一亩三分地 - 实习',
    url: 'https://www.1point3acres.com/bbs/forum/30',
    city: '全美',
    site: '1point3acres',
  },

  // 华人168招聘
  ...CITIES.slice(0, 5).map(c => ({
    name: `${c.name} - 华人168招聘`,
    url: `https://www.chinese168.com/classifieds/jobs/${c.site}`,
    city: c.name,
    site: 'chinese168',
  })),
];

// HTTP(S) fetch
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchPage(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

// 解析文学城招聘列表
function parseWenxueJob(html) {
  const jobs = [];
  // 文学城招聘列表结构
  const blockRegex = /<div[^>]*class="[^"]*list-item[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<div[^>]*class="[^"]*list-item[^"]*"/g;
  const titleRegex = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  const dateRegex = /<span[^>]*class="[^"]*date[^"]*"[^>]*>([\s\S]*?)<\/span>/g;

  let match;
  while ((match = blockRegex.exec(html)) !== null) {
    const block = match[1];
    const titleMatch = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/.exec(block);
    const dateMatch = /<span[^>]*class="[^"]*time[^"]*"[^>]*>([\s\S]*?)<\/span>/.exec(block);
    const locMatch = /<span[^>]*class="[^"]*location[^"]*"[^>]*>([\s\S]*?)<\/span>/.exec(block);

    if (titleMatch) {
      jobs.push({
        title: titleMatch[2].trim().replace(/<[^>]+>/g, ''),
        url: titleMatch[1].startsWith('http') ? titleMatch[1] : 'https://www.wenxuecity.com' + titleMatch[1],
        date: dateMatch ? dateMatch[1].trim() : '',
        location: locMatch ? locMatch[1].trim() : '',
      });
    }
  }
  return jobs;
}

// 主抓取函数
async function scrapeJobs() {
  console.log('🚀 开始抓取华人资讯网招聘信息...\n');
  const allJobs = [];

  for (const source of JOB_SOURCES) {
    try {
      console.log(`📡 抓取: ${source.name}`);
      const html = await fetchPage(source.url);
      let jobs = [];

      if (source.site === 'wenxuecity') {
        jobs = parseWenxueJob(html);
      }
      // 其他网站解析器可以在这里添加

      console.log(`  ✅ ${source.name}: ${jobs.length} 条`);
      allJobs.push(...jobs.map(j => ({ ...j, source: source.name, city: source.city })));

      // 礼貌延迟
      await new Promise(r => setTimeout(r, 2000));
    } catch (err) {
      console.log(`  ❌ ${source.name}: ${err.message}`);
    }
  }

  console.log(`\n📊 共抓取 ${allJobs.length} 条招聘信息`);
  return allJobs;
}

// CLI 入口
if (require.main === module) {
  scrapeJobs()
    .then(jobs => {
      console.log('\n✅ 抓取完成！');
      console.log(JSON.stringify(jobs, null, 2));
    })
    .catch(err => console.error('❌ 错误:', err));
}

module.exports = { scrapeJobs, JOB_SOURCES };
