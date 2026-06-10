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
  { id: 'community', icon: '🤝', name: 'Community', nameZh: '社区' },
  { id: 'dating', icon: '❤️', name: 'Dating', nameZh: '交友' },
  { id: 'legal', icon: '⚖️', name: 'Legal & Immigration', nameZh: '法律移民' },
];

export const LOCATIONS = [
  'New York', 'Los Angeles', 'San Francisco', 'Toronto', 'Vancouver',
  'Chicago', 'Houston', 'Seattle', 'Boston', 'Washington DC',
  'Montreal', 'San Diego', 'Atlanta', 'Miami', 'Denver',
];

// Auto-updated listings (last update: 2026-06-10T08:03:19.652Z)
export const SAMPLE_LISTINGS = [
  {
    "id": 100,
    "category": "housing",
    "title": "华人区独立屋出租 / Chinese Area House for Rent",
    "description": "3室2卫独立屋，近华人超市和餐厅",
    "price": "$2,800/month",
    "location": "Vancouver",
    "languages": [
      "zh",
      "en"
    ],
    "contact": "555-0100",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 101,
    "category": "housing",
    "title": "法拉盛两室公寓 / Flushing 2BR Apartment",
    "description": "近7号线地铁，交通便利",
    "price": "$1,800/month",
    "location": "New York",
    "languages": [
      "zh",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 102,
    "category": "housing",
    "title": "蒙特利公园新房招租 / Monterey Park New House",
    "description": "全新装修，学区优秀",
    "price": "$3,200/month",
    "location": "New York",
    "languages": [
      "zh",
      "en"
    ],
    "contact": "555-0100",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 103,
    "category": "housing",
    "title": "温哥华西区豪宅出租 / Vancouver West Side Luxury House",
    "description": "顶级学区，近列治文中心",
    "price": "$4,500/month",
    "location": "Toronto",
    "languages": [
      "zh",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 104,
    "category": "housing",
    "title": "Casa en venta - East LA / House for Sale",
    "description": "Hermosa casa cerca de la comunidad hispana",
    "price": "$520,000",
    "location": "Toronto",
    "languages": [
      "es",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 105,
    "category": "housing",
    "title": "Apartamento en Miami / Apartment in Miami",
    "description": "Cerca de Little Havana, walking distance",
    "price": "$1,600/month",
    "location": "Chicago",
    "languages": [
      "es",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 106,
    "category": "housing",
    "title": "Casa grande en Houston / Large House in Houston",
    "description": "Perfecta para familias hispanas",
    "price": "$2,100/month",
    "location": "Los Angeles",
    "languages": [
      "es",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 107,
    "category": "housing",
    "title": "Koreatown 아파트 / Koreatown Apartment",
    "description": "韩人区核心位置，近韩国超市",
    "price": "$1,900/month",
    "location": "Los Angeles",
    "languages": [
      "ko",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 108,
    "category": "housing",
    "title": "LA 한인타운 상가 / LA Koreatown Commercial",
    "description": "适合韩餐厅或超市经营",
    "price": "$4,500/month",
    "location": "Los Angeles",
    "languages": [
      "ko",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 109,
    "category": "housing",
    "title": "Little Saigon nhà cho thuê / House for Rent",
    "description": "近小西贡，越南社区",
    "price": "$1,700/month",
    "location": "New York",
    "languages": [
      "vi",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 110,
    "category": "housing",
    "title": "San Jose Vietnamese Area Rental",
    "description": "Gần khu người Việt, tiện đi lại",
    "price": "$2,000/month",
    "location": "Toronto",
    "languages": [
      "vi",
      "en"
    ],
    "contact": "contact@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 111,
    "category": "jobs",
    "title": "中文客服代表 / Chinese Customer Service",
    "description": "需要中英文流利",
    "price": "$45,000/year",
    "location": "Seattle",
    "languages": [
      "zh",
      "en"
    ],
    "contact": "hr@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 112,
    "category": "jobs",
    "title": "한국어 번역사 / Korean Translator",
    "description": "Korean-English translation needed",
    "price": "$35/hour",
    "location": "Los Angeles",
    "languages": [
      "ko",
      "en"
    ],
    "contact": "hr@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 113,
    "category": "jobs",
    "title": "Se Busca Cocinero Mexicano",
    "description": "Experiencia en cocina mexicana auténtica",
    "price": "$50,000/year",
    "location": "Seattle",
    "languages": [
      "es",
      "en"
    ],
    "contact": "hr@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 114,
    "category": "jobs",
    "title": "Vietnamese Medical Interpreter",
    "description": "Healthcare interpretation services",
    "price": "$40/hour",
    "location": "San Francisco",
    "languages": [
      "vi",
      "en"
    ],
    "contact": "hr@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 115,
    "category": "jobs",
    "title": "中文会计税务服务 / Chinese Tax Accountant",
    "description": "熟悉中美税务",
    "price": "$60/hour",
    "location": "Boston",
    "languages": [
      "zh",
      "en"
    ],
    "contact": "hr@example.com",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 116,
    "category": "legal",
    "title": "华人移民律师 / Chinese Immigration Lawyer",
    "description": "专精H1B, EB-5, 亲属移民",
    "price": "Free Consultation",
    "location": "Toronto",
    "languages": [
      "zh",
      "en"
    ],
    "contact": "service@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 117,
    "category": "legal",
    "title": "Abogado de Inmigración",
    "description": "Abogado hispanohablante con 15 años de experiencia",
    "price": "Free Consultation",
    "location": "Vancouver",
    "languages": [
      "es",
      "en"
    ],
    "contact": "service@example.com",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 118,
    "category": "services",
    "title": "한국어 의료 번역 / Korean Medical Interpretation",
    "description": "전문 한영 의료 통역",
    "price": "$60/hour",
    "location": "San Francisco",
    "languages": [
      "ko",
      "en"
    ],
    "contact": "service@example.com",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 119,
    "category": "services",
    "title": "Vietnamese Notary Public",
    "description": "Công chứng viên nói tiếng Việt",
    "price": "$15/signature",
    "location": "Miami",
    "languages": [
      "vi",
      "en"
    ],
    "contact": "service@example.com",
    "posted": "2026-06-10",
    "featured": false
  }
];
