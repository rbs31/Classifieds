// Language detection and mapping
export const LANGUAGES = {
  'zh': { code: 'zh', name: '中文', nameEn: 'Chinese', flag: '🇨🇳' },
  'es': { code: 'es', name: 'Español', nameEn: 'Spanish', flag: '🇲🇽' },
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

// Map browser language codes to our supported languages
function mapBrowserLang(lang) {
  const code = lang.split('-')[0].toLowerCase();
  if (LANGUAGES[code]) return code;
  // Map variants
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
  { id: 'community', icon: '🤝', name: 'Community', nameZh: '社区' },
  { id: 'dating', icon: '❤️', name: 'Dating', nameZh: '交友' },
  { id: 'legal', icon: '⚖️', name: 'Legal & Immigration', nameZh: '法律移民' },
];

export const LOCATIONS = [
  'New York', 'Los Angeles', 'San Francisco', 'Toronto', 'Vancouver',
  'Chicago', 'Houston', 'Seattle', 'Boston', 'Washington DC',
  'Montreal', 'San Diego', 'Atlanta', 'Miami', 'Denver',
];

// Sample listings data — each listing has `languages` array for service language support
export const SAMPLE_LISTINGS = [
  // Housing
  {
    id: 1, category: 'housing', title: '华人区独立屋出租 / Chinese Area House for Rent',
    description: '3室2卫独立屋，近华人超市和餐厅，学区优秀。/ 3BR/2BA house near Chinese supermarkets and restaurants, great school district.',
    price: '$2,800/month', location: 'San Francisco', languages: ['zh', 'en'],
    contact: '415-555-0101', posted: '2026-06-08', featured: true,
  },
  {
    id: 2, category: 'housing', title: '韩裔社区公寓 / Korean Community Apartment',
    description: 'Koreatown附近新建公寓，步行到K-Town。Brand new apartment near Koreatown, walking distance to K-Town.',
    price: '$1,800/month', location: 'Los Angeles', languages: ['ko', 'en'],
    contact: '213-555-0202', posted: '2026-06-07',
  },
  {
    id: 3, category: 'housing', title: 'Casa en venta - Flushing / House for Sale in Flushing',
    description: 'Hermosa casa cerca de la comunidad hispana. Beautiful home near Hispanic community.',
    price: '$650,000', location: 'New York', languages: ['es', 'en'],
    contact: '718-555-0303', posted: '2026-06-06',
  },
  {
    id: 4, category: 'housing', title: '越南社区附近公寓出租 / Apartment near Vietnamese Community',
    description: 'Westminster附近舒适公寓，近小西贡。Comfortable apartment near Little Saigon.',
    price: '$1,500/month', location: 'Los Angeles', languages: ['vi', 'en'],
    contact: '714-555-0404', posted: '2026-06-05',
  },
  {
    id: 5, category: 'housing', title: 'South Asian Family Home / 南亚裔家庭住宅',
    description: 'Spacious home in Devon Ave area, close to Indian grocery and temples. 德文大道附近宽敞住宅。',
    price: '$2,200/month', location: 'Chicago', languages: ['hi', 'en'],
    contact: '312-555-0505', posted: '2026-06-04',
  },

  // Jobs
  {
    id: 10, category: 'jobs', title: '中文客服代表 / Chinese Customer Service Rep',
    description: '需要中英文流利的客服代表。Bilingual Chinese/English customer service rep needed for growing company.',
    price: '$45,000/year', location: 'New York', languages: ['zh', 'en'],
    contact: 'hr@example.com', posted: '2026-06-08', featured: true,
  },
  {
    id: 11, category: 'jobs', title: '韩国语翻译 / Korean Translator',
    description: 'Korean-English translator needed for legal documents. 韩英法律文件翻译。',
    price: '$35/hour', location: 'Los Angeles', languages: ['ko', 'en'],
    contact: 'translate@example.com', posted: '2026-06-07',
  },
  {
    id: 12, category: 'jobs', title: 'Se Busca Cocinero Mexicano / Mexican Chef Wanted',
    description: 'Restaurante busca cocinero con experiencia en cocina mexicana auténtica. Restaurant seeking experienced Mexican cuisine chef.',
    price: '$50,000/year', location: 'Houston', languages: ['es', 'en'],
    contact: 'chef@example.com', posted: '2026-06-06',
  },
  {
    id: 13, category: 'jobs', title: 'Vietnamese-Speaking Real Estate Agent / 越南语房产经纪',
    description: 'Looking for a Vietnamese-speaking real estate agent. 寻找会越南语的房产经纪人。',
    price: 'Commission-based', location: 'San Jose', languages: ['vi', 'en'],
    contact: 'realestate@example.com', posted: '2026-06-05',
  },
  {
    id: 14, category: 'jobs', title: 'Hindi-Speaking IT Support / हिन्दी IT सहायता',
    description: 'IT support specialist with Hindi language skills needed. 需要会印地语的IT支持专员。',
    price: '$55,000/year', location: 'Seattle', languages: ['hi', 'en'],
    contact: 'it@example.com', posted: '2026-06-04',
  },

  // Vehicles
  {
    id: 20, category: 'vehicles', title: '2022 Toyota Camry / 2022丰田凯美瑞',
    description: '低里程，一手车主。Low mileage, one owner, excellent condition.',
    price: '$22,000', location: 'Vancouver', languages: ['zh', 'en'],
    contact: '604-555-2001', posted: '2026-06-08',
  },
  {
    id: 21, category: 'vehicles', title: 'Hyundai Sonata 2021 / 현대 소나타',
    description: '2021 Hyundai Sonata, well maintained. 잘 관리된 현대 소나타.',
    price: '$18,500', location: 'Los Angeles', languages: ['ko', 'en'],
    contact: '310-555-2002', posted: '2026-06-07',
  },

  // Services
  {
    id: 30, category: 'services', title: '中文会计税务服务 / Chinese Accounting & Tax Service',
    description: '专业处理中美税务，H1B/L1/Green Card税务规划。Professional US-China tax planning for H1B/L1/Green Card holders.',
    price: 'From $200', location: 'San Francisco', languages: ['zh', 'en'],
    contact: '415-555-3001', posted: '2026-06-08', featured: true,
  },
  {
    id: 31, category: 'services', title: 'Abogado de Inmigración / Immigration Lawyer',
    description: 'Abogado hispanohablante con 15 años de experiencia. Spanish-speaking immigration lawyer with 15 years experience.',
    price: 'Free Consultation', location: 'Houston', languages: ['es', 'en'],
    contact: '713-555-3002', posted: '2026-06-07',
  },
  {
    id: 32, category: 'services', title: '한국어 의료 번역 / Korean Medical Interpretation',
    description: 'Professional Korean-English medical interpretation service. 전문 한영 의료 통역 서비스.',
    price: '$60/hour', location: 'New York', languages: ['ko', 'en'],
    contact: '212-555-3003', posted: '2026-06-06',
  },
  {
    id: 33, category: 'services', title: 'Vietnamese Notary Public / Công chứng viên Việt Nam',
    description: 'Vietnamese-speaking notary public available. Chuyên viên công chứng nói tiếng Việt.',
    price: '$15/signature', location: 'San Jose', languages: ['vi', 'en'],
    contact: '408-555-3004', posted: '2026-06-05',
  },
  {
    id: 34, category: 'services', title: 'Hindi Legal Consultation / हिन्दी कानूनी सलाह',
    description: 'Hindi-speaking attorney for business and immigration matters. हिन्दी बोलने वाले वकील।',
    price: 'Free Initial Consultation', location: 'Chicago', languages: ['hi', 'en'],
    contact: '312-555-3005', posted: '2026-06-04',
  },
  {
    id: 35, category: 'services', title: 'Français Courtier Immobilier / French Real Estate Broker',
    description: 'French-speaking real estate broker in Montreal. Courtier immobilier francophone à Montréal.',
    price: 'Commission', location: 'Montreal', languages: ['fr', 'en'],
    contact: '514-555-3006', posted: '2026-06-03',
  },
  {
    id: 36, category: 'services', title: 'Portuguese Auto Repair / Reparo de Automóveis',
    description: 'Portuguese-speaking mechanic. Mecânico que fala português. Honest and affordable.',
    price: 'From $80', location: 'Boston', languages: ['pt', 'en'],
    contact: '617-555-3007', posted: '2026-06-02',
  },

  // Items
  {
    id: 40, category: 'items', title: '中文教材和书籍 / Chinese Textbooks & Books',
    description: '大量中文教材和儿童读物出售。Large collection of Chinese textbooks and children\'s books.',
    price: '$5-$30 each', location: 'Vancouver', languages: ['zh', 'en'],
    contact: '778-555-4001', posted: '2026-06-08',
  },
  {
    id: 41, category: 'items', title: 'Muebles Usados / Used Furniture',
    description: 'Sofá, mesa de comedor y más. Sofa, dining table and more. Good condition.',
    price: 'Make an offer', location: 'Miami', languages: ['es', 'en'],
    contact: '305-555-4002', posted: '2026-06-07',
  },

  // Community
  {
    id: 50, category: 'community', title: '华人春节庆典 / Chinese New Year Celebration',
    description: '2027春节庆典活动，欢迎参加！Chinese New Year 2027 celebration event, everyone welcome!',
    price: 'Free', location: 'San Francisco', languages: ['zh', 'en'],
    contact: 'events@community.org', posted: '2026-06-08',
  },
  {
    id: 51, category: 'community', title: 'Fiesta Latina / Latin Festival',
    description: 'Gran fiesta latina con música y comida. Great Latin festival with music and food!',
    price: '$10 entry', location: 'Los Angeles', languages: ['es', 'en'],
    contact: 'fiesta@community.org', posted: '2026-06-07',
  },
  {
    id: 52, category: 'community', title: '한국어 성경 모임 / Korean Bible Study',
    description: 'Weekly Korean Bible study group. 매주 한국어 성경 모임.',
    price: 'Free', location: 'Atlanta', languages: ['ko', 'en'],
    contact: 'church@community.org', posted: '2026-06-06',
  },

  // Legal
  {
    id: 60, category: 'legal', title: '中文移民律师 / Chinese Immigration Attorney',
    description: '专精H1B, EB-5, 亲属移民。Specializing in H1B, EB-5, family-based immigration.',
    price: 'Free Consultation', location: 'New York', languages: ['zh', 'en'],
    contact: '646-555-6001', posted: '2026-06-08', featured: true,
  },
  {
    id: 61, category: 'legal', title: 'Abogado de Accidentes / Accident Lawyer',
    description: 'Si tuvo un accidente, llámenos. If you had an accident, call us. No fee unless we win.',
    price: 'No Win No Fee', location: 'Houston', languages: ['es', 'en'],
    contact: '832-555-6002', posted: '2026-06-07',
  },
  {
    id: 62, category: 'legal', title: 'Russian-Speaking Tax Attorney / Русскоязычный налоговый адвокат',
    description: 'Tax attorney fluent in Russian. Налоговый адвокат, говорящий по-русски.',
    price: '$250/hour', location: 'New York', languages: ['ru', 'en'],
    contact: '212-555-6003', posted: '2026-06-06',
  },
  {
    id: 63, category: 'legal', title: 'Arabic Legal Aid / مساعدة قانونية بالعربية',
    description: 'Arabic-speaking legal aid for refugees and immigrants. مساعدة قانونية باللغة العربية.',
    price: 'Sliding Scale', location: 'Detroit', languages: ['ar', 'en'],
    contact: '313-555-6004', posted: '2026-06-05',
  },

  // Dating
  {
    id: 70, category: 'dating', title: '华人交友活动 / Chinese Speed Dating',
    description: '每月一次华人单身交友活动。Monthly Chinese singles mixer event.',
    price: '$25', location: 'San Francisco', languages: ['zh', 'en'],
    contact: 'dating@events.org', posted: '2026-06-08',
  },
  {
    id: 71, category: 'dating', title: 'Latin Dance Social / Baile Social Latino',
    description: 'Salsa, Bachata, and more! Meet new people. Salsa, Bachata y más! Conoce gente nueva.',
    price: '$15', location: 'Miami', languages: ['es', 'en'],
    contact: 'dance@events.org', posted: '2026-06-07',
  },
];
