// Language detection and mapping
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

// Auto-updated listings (last update: 2026-06-10T23:17:33.701Z)
export const SAMPLE_LISTINGS = [
  {
    "id": 100,
    "category": "housing",
    "title": "Large 3 bedroom in desirable West Harrison",
    "description": "Large 3 bedroom in desirable West Harrison — west harrison",
    "price": "$4,800",
    "location": "west harrison",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 101,
    "category": "housing",
    "title": "Newly renovated Cozy Studio Near Prospect Park &amp; Express Trains",
    "description": "Newly renovated Cozy Studio Near Prospect Park &amp; Express Trains — Prospect Heights/Crown Heights/ Lefferts Garden/ Bed stuy",
    "price": "$2,595",
    "location": "Prospect Heights/Crown Heights/ Lefferts Garden/ Bed stuy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 102,
    "category": "housing",
    "title": "Amazing Charming Spacious 3BR Brownstone Near Fort Greene Park",
    "description": "Amazing Charming Spacious 3BR Brownstone Near Fort Greene Park — Bushwick/Clinton hill/Bed stuy/Fort Greene",
    "price": "$4,499",
    "location": "Bushwick/Clinton hill/Bed stuy/Fort Greene",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 103,
    "category": "housing",
    "title": "Newly renovated Amazing Charming 3BR 2Bath Washer/Dryer Near Trains",
    "description": "Newly renovated Amazing Charming 3BR 2Bath Washer/Dryer Near Trains — Bed Stuy/Bushwick/Clinton hill/ Crown heights",
    "price": "$3,999",
    "location": "Bed Stuy/Bushwick/Clinton hill/ Crown heights",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 104,
    "category": "housing",
    "title": "Prospect Lefferts gardens - Luxury 1 Bedroom  - Gym - Laundry - No fee",
    "description": "Prospect Lefferts gardens - Luxury 1 Bedroom  - Gym - Laundry - No fee — PLG / Flatbush",
    "price": "$2,700",
    "location": "PLG / Flatbush",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 105,
    "category": "housing",
    "title": "beautiful 2 BdrS for rent in BROOKLYN good condition private house",
    "description": "beautiful 2 BdrS for rent in BROOKLYN good condition private house — BROOKLYN",
    "price": "$2,700",
    "location": "BROOKLYN",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 106,
    "category": "housing",
    "title": "*VERY SPACIOUS,NEAR SHOPS, CAFES, STEPS TO TRAIN*PRIME**",
    "description": "*VERY SPACIOUS,NEAR SHOPS, CAFES, STEPS TO TRAIN*PRIME** — PROSPECT PARK LEFFERTS AREA/",
    "price": "$3,300",
    "location": "PROSPECT PARK LEFFERTS AREA/",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 107,
    "category": "housing",
    "title": "One bedroom in the West Village",
    "description": "One bedroom in the West Village — West Village",
    "price": "$5,400",
    "location": "West Village",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 108,
    "category": "housing",
    "title": "Put this 1 Bedroom on your to-see list! You&#39;ll be glad you did!",
    "description": "Put this 1 Bedroom on your to-see list! You&#39;ll be glad you did! — Los Angeles",
    "price": "$2,260",
    "location": "Los Angeles",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 109,
    "category": "housing",
    "title": "Lovely Apt  - Prime Location - Large Kitchen - Abundant Storage",
    "description": "Lovely Apt  - Prime Location - Large Kitchen - Abundant Storage — Los Feliz",
    "price": "$2,349",
    "location": "Los Feliz",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 110,
    "category": "housing",
    "title": "Incredible Location! Newly Renovated. Wood Floors. Pool Access.",
    "description": "Incredible Location! Newly Renovated. Wood Floors. Pool Access. — North Hollywood",
    "price": "$2,695",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 111,
    "category": "housing",
    "title": "Beautiful Studio in Sherman Oaks - Covered Parking, Pool, Dishwasher",
    "description": "Beautiful Studio in Sherman Oaks - Covered Parking, Pool, Dishwasher — Sherman Oaks",
    "price": "$1,649",
    "location": "Sherman Oaks",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 112,
    "category": "housing",
    "title": "3 Bedroom with W/D in Unit in Encino | Gym | Schedule Your Tour Today",
    "description": "3 Bedroom with W/D in Unit in Encino | Gym | Schedule Your Tour Today — Encino - Open House",
    "price": "$3,530",
    "location": "Encino - Open House",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 113,
    "category": "housing",
    "title": "2/bd, Pool, BBQ / Picnic area",
    "description": "2/bd, Pool, BBQ / Picnic area — 6425 Reseda Blvd, Reseda, CA",
    "price": "$2,399",
    "location": "6425 Reseda Blvd, Reseda, CA",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 114,
    "category": "housing",
    "title": "high vaulted ceiling",
    "description": "high vaulted ceiling — 26741 N. Isabella Pkwy, Canyon Country, CA",
    "price": "$2,399",
    "location": "26741 N. Isabella Pkwy, Canyon Country, CA",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 115,
    "category": "housing",
    "title": "One Month Free! Beautiful 2Bdrms in Studio City! Walk to Ventura Blvd!",
    "description": "One Month Free! Beautiful 2Bdrms in Studio City! Walk to Ventura Blvd! — Studio City",
    "price": "$3,950",
    "location": "Studio City",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 116,
    "category": "housing",
    "title": "2 Bed, Private Patio, Spa Hot Tub",
    "description": "2 Bed, Private Patio, Spa Hot Tub — dublin / pleasanton / livermore",
    "price": "$2,698",
    "location": "dublin / pleasanton / livermore",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 117,
    "category": "housing",
    "title": "Walk-In Closets, Wood-Style Flooring, 2B/2B",
    "description": "Walk-In Closets, Wood-Style Flooring, 2B/2B — san mateo",
    "price": "$4,626",
    "location": "san mateo",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 118,
    "category": "housing",
    "title": "Beautiful Home in Heron Bay / San Leandro",
    "description": "Beautiful Home in Heron Bay / San Leandro — san leandro",
    "price": "$3,600",
    "location": "san leandro",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 119,
    "category": "housing",
    "title": "2 BEDROOM 1 BATH APARTMENT TOP FLOOR WITH BAY VIEW WOOD FLOOR",
    "description": "2 BEDROOM 1 BATH APARTMENT TOP FLOOR WITH BAY VIEW WOOD FLOOR — berkeley",
    "price": "$2,895",
    "location": "berkeley",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 120,
    "category": "housing",
    "title": "Your Fremont dream spot! 2 bed, 2 bath - Take a peek.",
    "description": "Your Fremont dream spot! 2 bed, 2 bath - Take a peek. — Fremont",
    "price": "$3,712",
    "location": "Fremont",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 121,
    "category": "housing",
    "title": "Located in Fremont, Convenient Features, 2/BD 2/BA",
    "description": "Located in Fremont, Convenient Features, 2/BD 2/BA — fremont / union city / newark",
    "price": "$3,092",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 122,
    "category": "housing",
    "title": "On-Site Laundry, 2/BD, San Pablo CA",
    "description": "On-Site Laundry, 2/BD, San Pablo CA — richmond / point / annex",
    "price": "$2,175",
    "location": "richmond / point / annex",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 123,
    "category": "housing",
    "title": "1 bedroom, Millbrae CA, Elevators",
    "description": "1 bedroom, Millbrae CA, Elevators — san mateo",
    "price": "$3,263",
    "location": "san mateo",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 124,
    "category": "housing",
    "title": "Open Concept Basement Apartment for Rent",
    "description": "Open Concept Basement Apartment for Rent — Toronto",
    "price": "$1,400",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 125,
    "category": "housing",
    "title": "25 MILLER ST. 2ND FL.- 2BED/1BATH, LAUNDRY, YARD",
    "description": "25 MILLER ST. 2ND FL.- 2BED/1BATH, LAUNDRY, YARD — Toronto",
    "price": "$2,200",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 126,
    "category": "housing",
    "title": "Senior and Family Living Apartments",
    "description": "Senior and Family Living Apartments — ajax",
    "price": "$2,199",
    "location": "ajax",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 127,
    "category": "housing",
    "title": "Amazing 3+1 Townhome Available In Aurora!",
    "description": "Amazing 3+1 Townhome Available In Aurora! — 145 Millcliff Circ",
    "price": "$3,550",
    "location": "145 Millcliff Circ",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 128,
    "category": "housing",
    "title": "Keeley Condos, Newer Building, Parking / Locker",
    "description": "Keeley Condos, Newer Building, Parking / Locker — Downsview-Roding-CFB, Toronto,",
    "price": "$2,450",
    "location": "Downsview-Roding-CFB, Toronto,",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 129,
    "category": "housing",
    "title": "Furnished 1-BR Basement Unit for rent in Mississauga",
    "description": "Furnished 1-BR Basement Unit for rent in Mississauga — mississauga",
    "price": "$1,800",
    "location": "mississauga",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 130,
    "category": "housing",
    "title": "Bachelor Penthouse Suite Available For Rent in Mississauga",
    "description": "Bachelor Penthouse Suite Available For Rent in Mississauga — Mississauga",
    "price": "$2,000",
    "location": "Mississauga",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 131,
    "category": "housing",
    "title": "Beautiful 2-BR suite for rent at Yonge &amp; College",
    "description": "Beautiful 2-BR suite for rent at Yonge &amp; College — Toronto",
    "price": "$2,850",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 132,
    "category": "housing",
    "title": "Furnished 2 Bed 2 Bath Apartment at OMA 2 in Brentwood",
    "description": "Furnished 2 Bed 2 Bath Apartment at OMA 2 in Brentwood — burnaby/newwest",
    "price": "$3,000",
    "location": "burnaby/newwest",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 133,
    "category": "housing",
    "title": "Spacious 1-bedroom 1-bathroom unit with generous storage",
    "description": "Spacious 1-bedroom 1-bathroom unit with generous storage — richmond",
    "price": "$1,700",
    "location": "richmond",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 134,
    "category": "housing",
    "title": "Need a furnished part time place but not a full-time price!",
    "description": "Need a furnished part time place but not a full-time price! — north shore",
    "price": "$1,350",
    "location": "north shore",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 135,
    "category": "housing",
    "title": "Near SFU, Basement Suite, Cat-friendly (2 Bedroom 1 Bath)",
    "description": "Near SFU, Basement Suite, Cat-friendly (2 Bedroom 1 Bath) — Burnaby",
    "price": "$1,700",
    "location": "Burnaby",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 136,
    "category": "housing",
    "title": "Near Royal Oak &amp; Metrotown Modern Private Bath, Professional Cleaned",
    "description": "Near Royal Oak &amp; Metrotown Modern Private Bath, Professional Cleaned — Burnaby",
    "price": "$1,300",
    "location": "Burnaby",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 137,
    "category": "housing",
    "title": "Downtown Near Waterfront, Gastown, Chinatown",
    "description": "Downtown Near Waterfront, Gastown, Chinatown — Vancouver",
    "price": "$800",
    "location": "Vancouver",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 138,
    "category": "housing",
    "title": "Spacious 3-Bedroom Home with 2 Bathroom in  Altamont",
    "description": "Spacious 3-Bedroom Home with 2 Bathroom in  Altamont — West Vancouver",
    "price": "$2,500",
    "location": "West Vancouver",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 139,
    "category": "housing",
    "title": "East Vancouver 2 Bedroom Laneway House",
    "description": "East Vancouver 2 Bedroom Laneway House — Vancouver",
    "price": "$2,300",
    "location": "Vancouver",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 140,
    "category": "housing",
    "title": "Convenient location for commuters – On the bus line! 2 bed, 1 bath",
    "description": "Convenient location for commuters – On the bus line! 2 bed, 1 bath — Fife",
    "price": "$1,899",
    "location": "Fife",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 141,
    "category": "housing",
    "title": "Assigned Covered Parking, Mountain Views, Walk-in closet, Pantry",
    "description": "Assigned Covered Parking, Mountain Views, Walk-in closet, Pantry — Enumclaw",
    "price": "$2,050",
    "location": "Enumclaw",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 142,
    "category": "housing",
    "title": "🌞 4-Wks Free Rent! Sundodger Apts: Ideal U-District Living near UW!",
    "description": "🌞 4-Wks Free Rent! Sundodger Apts: Ideal U-District Living near UW! — 4218 Roosevelt Way Northeast, Seattle, WA",
    "price": "$1,651",
    "location": "4218 Roosevelt Way Northeast, Seattle, WA",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 143,
    "category": "housing",
    "title": "Private patio/balcony, 2bd 1ba, in Burien WA",
    "description": "Private patio/balcony, 2bd 1ba, in Burien WA — 231 S 177th Pl, Burien, WA",
    "price": "$2,060",
    "location": "231 S 177th Pl, Burien, WA",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 144,
    "category": "housing",
    "title": "Limited Deal at Met Spires Tacoma - 2 Weeks FREE! Act Fast!",
    "description": "Limited Deal at Met Spires Tacoma - 2 Weeks FREE! Act Fast! — Downtown Tacoma",
    "price": "$2,256",
    "location": "Downtown Tacoma",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 145,
    "category": "housing",
    "title": "3 Bed, Full-Size Washer/Dryer, Over-sized Walk-In Closets",
    "description": "3 Bed, Full-Size Washer/Dryer, Over-sized Walk-In Closets — 25102 62nd Avenue South, Kent, WA",
    "price": "$2,799",
    "location": "25102 62nd Avenue South, Kent, WA",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 146,
    "category": "housing",
    "title": "Cats and Dogs Welcome! We are Pet Friendly! 2 BD / 2 BA",
    "description": "Cats and Dogs Welcome! We are Pet Friendly! 2 BD / 2 BA — Fife",
    "price": "$2,143",
    "location": "Fife",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 147,
    "category": "housing",
    "title": "Amazing 3 bedroom, 2 bathroom in Seattle. 1155 SqFt!",
    "description": "Amazing 3 bedroom, 2 bathroom in Seattle. 1155 SqFt! — Seattle",
    "price": "$2,372",
    "location": "Seattle",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 148,
    "category": "housing",
    "title": "Cute 3 bedroom house near downtown and parks",
    "description": "Cute 3 bedroom house near downtown and parks — Valparaiso",
    "price": "$2,100",
    "location": "Valparaiso",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 149,
    "category": "housing",
    "title": "Giant TOP FLOOR 3 Bedroom in Logan Square!",
    "description": "Giant TOP FLOOR 3 Bedroom in Logan Square! — Logan Square",
    "price": "$3,195",
    "location": "Logan Square",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 150,
    "category": "housing",
    "title": "Rogers Park - 2bd 2ba - Near CTA Morse Red Line",
    "description": "Rogers Park - 2bd 2ba - Near CTA Morse Red Line — Chicago",
    "price": "$2,300",
    "location": "Chicago",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 151,
    "category": "housing",
    "title": "Rogers Park - 1bd 1ba - Near CTA Morse Red Line",
    "description": "Rogers Park - 1bd 1ba - Near CTA Morse Red Line — Chicago",
    "price": "$1,800",
    "location": "Chicago",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 152,
    "category": "housing",
    "title": "Large Upgraded Studio at Gold Coast",
    "description": "Large Upgraded Studio at Gold Coast — Gold Coast",
    "price": "$2,200",
    "location": "Gold Coast",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 153,
    "category": "housing",
    "title": "Logan Square one bedroom! Large floorplan!",
    "description": "Logan Square one bedroom! Large floorplan! — Logan Square",
    "price": "$1,975",
    "location": "Logan Square",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 154,
    "category": "housing",
    "title": "★ Fully Renovated 2BD in Park Ridge – Parking, Heat &amp; Water included",
    "description": "★ Fully Renovated 2BD in Park Ridge – Parking, Heat &amp; Water included — Park Ridge",
    "price": "$2,000",
    "location": "Park Ridge",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 155,
    "category": "housing",
    "title": "Rogers Park - Studio 1ba - Near CTA Morse Red Line",
    "description": "Rogers Park - Studio 1ba - Near CTA Morse Red Line — Chicago",
    "price": "$1,150",
    "location": "Chicago",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 156,
    "category": "housing",
    "title": "Express Check-in, Elevators, Service Animals Welcome",
    "description": "Express Check-in, Elevators, Service Animals Welcome — 27780 Parkside St, Katy, TX",
    "price": "$343",
    "location": "27780 Parkside St, Katy, TX",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 157,
    "category": "housing",
    "title": "Pay Monthly, Stress-Free - No Lease, No Deposit Required!",
    "description": "Pay Monthly, Stress-Free - No Lease, No Deposit Required! — 2551 Interstate 45 N, Conroe, TX",
    "price": "$896",
    "location": "2551 Interstate 45 N, Conroe, TX",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 158,
    "category": "housing",
    "title": "PINE TERRACE",
    "description": "PINE TERRACE",
    "price": "$879",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 159,
    "category": "housing",
    "title": "Abundant space in your new 1 bed 1 bath, along with washer and dryer",
    "description": "Abundant space in your new 1 bed 1 bath, along with washer and dryer — Houston",
    "price": "$1,099",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 160,
    "category": "housing",
    "title": "Live Above &amp; Beyond-Balcony, Pool, &amp; Guest Parking!",
    "description": "Live Above &amp; Beyond-Balcony, Pool, &amp; Guest Parking! — Houston Tx",
    "price": "$1,054",
    "location": "Houston Tx",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 161,
    "category": "housing",
    "title": "PINE TERRACE",
    "description": "PINE TERRACE",
    "price": "$879",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 162,
    "category": "housing",
    "title": "Gorgeous 3 Bedroom- One Story in the Katy Area- Available Now",
    "description": "Gorgeous 3 Bedroom- One Story in the Katy Area- Available Now",
    "price": "$1,845",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 163,
    "category": "housing",
    "title": "2 Bed 2 Bath Modern Apartment Home",
    "description": "2 Bed 2 Bath Modern Apartment Home",
    "price": "$1,599",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 164,
    "category": "housing",
    "title": "3BR/2.5BA - 1700ft2 - Southie full House w/ 2 level Deck for 9/1",
    "description": "3BR/2.5BA - 1700ft2 - Southie full House w/ 2 level Deck for 9/1 — South Boston",
    "price": "$4,800",
    "location": "South Boston",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 165,
    "category": "housing",
    "title": "Beautiful 1BD/1BA in West End – River Views, steps to North Station",
    "description": "Beautiful 1BD/1BA in West End – River Views, steps to North Station — Boston",
    "price": "$2,950",
    "location": "Boston",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 166,
    "category": "housing",
    "title": "Penthouse Suite 3 Beds, 2.5 Baths, Garage, Granite, Marble Staircase,",
    "description": "Penthouse Suite 3 Beds, 2.5 Baths, Garage, Granite, Marble Staircase, — Cambridge \\ Davis Sq. \\ N. Cambridge",
    "price": "$5,400",
    "location": "Cambridge \\ Davis Sq. \\ N. Cambridge",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 167,
    "category": "housing",
    "title": "1br/1ba (1800/mo) in a 3br/2ba apartment - flexible moving dates DAVIS",
    "description": "1br/1ba (1800/mo) in a 3br/2ba apartment - flexible moving dates DAVIS — Somerville",
    "price": "$1,800",
    "location": "Somerville",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 168,
    "category": "housing",
    "title": "-- Great Condo - 2 Bed 2 Baths -- Laundry in Unit -- August 1st",
    "description": "-- Great Condo - 2 Bed 2 Baths -- Laundry in Unit -- August 1st — Medford \\ Ball Sq. \\ Tufts",
    "price": "$4,000",
    "location": "Medford \\ Ball Sq. \\ Tufts",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 169,
    "category": "housing",
    "title": "$1700 / 1.5br - 1,000 sq ft - OPEN HOUSE, 6/13, 9-12 pm, Avail 8/1",
    "description": "$1700 / 1.5br - 1,000 sq ft - OPEN HOUSE, 6/13, 9-12 pm, Avail 8/1 — Natick",
    "price": "$1,700",
    "location": "Natick",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 170,
    "category": "housing",
    "title": "NO FEE! SEPT Sweet 1bed split in Brighton! B/C/D line!",
    "description": "NO FEE! SEPT Sweet 1bed split in Brighton! B/C/D line! — Brighton",
    "price": "$2,435",
    "location": "Brighton",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 171,
    "category": "housing",
    "title": "379 Windsor St #1 - Cambridge",
    "description": "379 Windsor St #1 - Cambridge — Cambridge \\ E. Cambridge \\ Inman Sq.",
    "price": "$3,200",
    "location": "Cambridge \\ E. Cambridge \\ Inman Sq.",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 172,
    "category": "housing",
    "title": "Upgraded 2 bedrooms 1 bath! Very Low Move In!",
    "description": "Upgraded 2 bedrooms 1 bath! Very Low Move In! — Lauderhill",
    "price": "$1,878",
    "location": "Lauderhill",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 173,
    "category": "housing",
    "title": "EFFICIENCY Grande Entrada Privada SW area de 137th &amp; 24th St $1300.00",
    "description": "EFFICIENCY Grande Entrada Privada SW area de 137th &amp; 24th St $1300.00 — MIAMI-DADE",
    "price": "$1,300",
    "location": "MIAMI-DADE",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 174,
    "category": "housing",
    "title": "Studio/1BA Miami, FL 33187 – $700/mo – Pets OK – Section 8 Allowed",
    "description": "Studio/1BA Miami, FL 33187 – $700/mo – Pets OK – Section 8 Allowed — Miami, FL",
    "price": "$700",
    "location": "Miami, FL",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 175,
    "category": "housing",
    "title": "Beautiful, fully furnished 2Bed/2Bath residence in waterfront building",
    "description": "Beautiful, fully furnished 2Bed/2Bath residence in waterfront building — Miami Beach",
    "price": "$3,600",
    "location": "Miami Beach",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 176,
    "category": "housing",
    "title": "in Boca Raton FL, 1/bd 1/ba, Cable Ready",
    "description": "in Boca Raton FL, 1/bd 1/ba, Cable Ready — 2500 N Federal Hwy, Boca Raton, FL",
    "price": "$1,980",
    "location": "2500 N Federal Hwy, Boca Raton, FL",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 177,
    "category": "housing",
    "title": "570 NW 48th St, Unit B",
    "description": "570 NW 48th St, Unit B — miami / dade county",
    "price": "$1,500",
    "location": "miami / dade county",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 178,
    "category": "housing",
    "title": "Live in style at Uptown 22! Newly renovated 1 bed / 1 bath!",
    "description": "Live in style at Uptown 22! Newly renovated 1 bed / 1 bath! — West Palm Beach",
    "price": "$1,575",
    "location": "West Palm Beach",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 179,
    "category": "housing",
    "title": "327 NE 55th St, Unit STUDIO",
    "description": "327 NE 55th St, Unit STUDIO — miami / dade county",
    "price": "$1,475",
    "location": "miami / dade county",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 180,
    "category": "services",
    "title": "WOODEN SEWING BOX, ACCORDION STYLE, VINTAGE",
    "description": "WOODEN SEWING BOX, ACCORDION STYLE, VINTAGE — Armonk",
    "price": "$200",
    "location": "Armonk",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 181,
    "category": "services",
    "title": "1996 GT Performer Vintage Old School BMX Bike Bicycle",
    "description": "1996 GT Performer Vintage Old School BMX Bike Bicycle — Armonk",
    "price": "$900",
    "location": "Armonk",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 182,
    "category": "services",
    "title": "VINTAGE HERITAGE Banarasi SARI Silk+ Silver",
    "description": "VINTAGE HERITAGE Banarasi SARI Silk+ Silver — Gramercy",
    "price": "$159",
    "location": "Gramercy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 183,
    "category": "services",
    "title": "FRENCH  GODINGER &amp; Co. DINNER PLATE w/ Lined Border c.2006 &#39;Tribeca&#39;",
    "description": "FRENCH  GODINGER &amp; Co. DINNER PLATE w/ Lined Border c.2006 &#39;Tribeca&#39; — Gramercy",
    "price": "$56",
    "location": "Gramercy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 184,
    "category": "services",
    "title": "Vintage Kalp-Son Rattan Co. Elegant Mid-century Rattan Swivel Chairs",
    "description": "Vintage Kalp-Son Rattan Co. Elegant Mid-century Rattan Swivel Chairs — Armonk",
    "price": "$250",
    "location": "Armonk",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 185,
    "category": "services",
    "title": "LV + GUCCI + PRADA Bags + Boxes /  COLLECTION",
    "description": "LV + GUCCI + PRADA Bags + Boxes /  COLLECTION — Gramercy",
    "price": "$10",
    "location": "Gramercy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 186,
    "category": "services",
    "title": "3D printed SPLIT CUPS for paint / SPLASH N COLOR",
    "description": "3D printed SPLIT CUPS for paint / SPLASH N COLOR — Gramercy",
    "price": "$20",
    "location": "Gramercy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 187,
    "category": "services",
    "title": "Lot of 2 Scientific Apparatus Pyrex Laboratory Glass",
    "description": "Lot of 2 Scientific Apparatus Pyrex Laboratory Glass — Armonk",
    "price": "$100",
    "location": "Armonk",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 188,
    "category": "services",
    "title": "Coleman Quick Air Pump",
    "description": "Coleman Quick Air Pump — North Hollywood",
    "price": "$5",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 189,
    "category": "services",
    "title": "Like New Electric Toothbrush with Brush and Charger.",
    "description": "Like New Electric Toothbrush with Brush and Charger. — North Hollywood",
    "price": "$10",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 190,
    "category": "services",
    "title": "New Metal Dustpan very clean and lightly used Broom.",
    "description": "New Metal Dustpan very clean and lightly used Broom. — North Hollywood",
    "price": "$1",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 191,
    "category": "services",
    "title": "Original mid-1940s OUTLAW movie poster – Jane Russell, Jack Buetel",
    "description": "Original mid-1940s OUTLAW movie poster – Jane Russell, Jack Buetel — central LA 213/323",
    "price": "$10,000",
    "location": "central LA 213/323",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 192,
    "category": "services",
    "title": "USB Charging Station 10 Ports.",
    "description": "USB Charging Station 10 Ports. — North Hollywood",
    "price": "$5",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 193,
    "category": "services",
    "title": "Women&#39;s Cothing; skirts, dresses, jackets, pants, tops and blouses",
    "description": "Women&#39;s Cothing; skirts, dresses, jackets, pants, tops and blouses — Los Angeles",
    "price": "$10",
    "location": "Los Angeles",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 194,
    "category": "services",
    "title": "Original Art: Golden Silver Bronze Age Comics DAVE SIMONS Flash Gordon",
    "description": "Original Art: Golden Silver Bronze Age Comics DAVE SIMONS Flash Gordon — San Diego",
    "price": "$340",
    "location": "San Diego",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 195,
    "category": "services",
    "title": "4X New Exercise Workout items.",
    "description": "4X New Exercise Workout items. — North Hollywood",
    "price": "$10",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 196,
    "category": "services",
    "title": "Mirakel Neck and Shoulder Massager with Heat",
    "description": "Mirakel Neck and Shoulder Massager with Heat — Novato",
    "price": "$20",
    "location": "Novato",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 197,
    "category": "services",
    "title": "Vintage Torelli Corsa Strada – Italian Steel Road Bike Early–Mid 1990s",
    "description": "Vintage Torelli Corsa Strada – Italian Steel Road Bike Early–Mid 1990s — city of san francisco",
    "price": "$300",
    "location": "city of san francisco",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 198,
    "category": "services",
    "title": "Skywave Pit-Raod 1/700 Scale DD-436 Monssen US Navy Destroyer Model ki",
    "description": "Skywave Pit-Raod 1/700 Scale DD-436 Monssen US Navy Destroyer Model ki — pittsburg / antioch",
    "price": "$60",
    "location": "pittsburg / antioch",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 199,
    "category": "services",
    "title": "Jade Pothos in Hanging Basket, Epipremnum Aureum Jade",
    "description": "Jade Pothos in Hanging Basket, Epipremnum Aureum Jade — fremont / union city / newark",
    "price": "$10",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 200,
    "category": "services",
    "title": "Jade Pothos in Hanging Basket, Epipremnum Aureum Jade",
    "description": "Jade Pothos in Hanging Basket, Epipremnum Aureum Jade — fremont / union city / newark",
    "price": "$10",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 201,
    "category": "services",
    "title": "New Exterior Galvanized Smooth Shank Nails And Drywall Screws ,Nails",
    "description": "New Exterior Galvanized Smooth Shank Nails And Drywall Screws ,Nails — fremont / union city / newark",
    "price": "$4",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 202,
    "category": "services",
    "title": "Micro Mini scooter",
    "description": "Micro Mini scooter — berkeley",
    "price": "$20",
    "location": "berkeley",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 203,
    "category": "services",
    "title": "Free Couch",
    "description": "Free Couch — palo alto",
    "price": "$0",
    "location": "palo alto",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 204,
    "category": "services",
    "title": "naughty secretary",
    "description": "naughty secretary — toronto",
    "price": "$0",
    "location": "toronto",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 205,
    "category": "services",
    "title": "Vintage Mid-Century Amber Glass Tulip Vase – Anchor Hocking Rainflower",
    "description": "Vintage Mid-Century Amber Glass Tulip Vase – Anchor Hocking Rainflower — Yonge and Steeles",
    "price": "$35",
    "location": "Yonge and Steeles",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 206,
    "category": "services",
    "title": "Kink Curb BMX Bicycle",
    "description": "Kink Curb BMX Bicycle — Pickering",
    "price": "$375",
    "location": "Pickering",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 207,
    "category": "services",
    "title": "&quot;Eyes of the Willow&quot; – Original 1997 Sumi-e &amp; Watercolor Painting by E",
    "description": "&quot;Eyes of the Willow&quot; – Original 1997 Sumi-e &amp; Watercolor Painting by E — Yonge and Steeles",
    "price": "$175",
    "location": "Yonge and Steeles",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 208,
    "category": "services",
    "title": "Chris de Combe Oil Painting – &quot;Lady in Green Jacket&quot; (After August Mac",
    "description": "Chris de Combe Oil Painting – &quot;Lady in Green Jacket&quot; (After August Mac — Yonge and Steeles",
    "price": "$220",
    "location": "Yonge and Steeles",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 209,
    "category": "services",
    "title": "Couch / Sofa, brown, soft - free",
    "description": "Couch / Sofa, brown, soft - free — Dundas West",
    "price": "$0",
    "location": "Dundas West",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 210,
    "category": "services",
    "title": "Badminton Set 5 carbon frame Racquets, 5 Cases, Yonex, Toalson, Slazen",
    "description": "Badminton Set 5 carbon frame Racquets, 5 Cases, Yonex, Toalson, Slazen — Markham or Whitby",
    "price": "$120",
    "location": "Markham or Whitby",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 211,
    "category": "services",
    "title": "New Dell Pro 24 All in One Plus Desktop Computer -Ultra 5, 512gb/16gb",
    "description": "New Dell Pro 24 All in One Plus Desktop Computer -Ultra 5, 512gb/16gb — Toronto",
    "price": "$1,100",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 212,
    "category": "items",
    "title": "WOODEN SEWING BOX, ACCORDION STYLE, VINTAGE",
    "description": "WOODEN SEWING BOX, ACCORDION STYLE, VINTAGE — Armonk",
    "price": "$200",
    "location": "Armonk",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 213,
    "category": "items",
    "title": "1996 GT Performer Vintage Old School BMX Bike Bicycle",
    "description": "1996 GT Performer Vintage Old School BMX Bike Bicycle — Armonk",
    "price": "$900",
    "location": "Armonk",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 214,
    "category": "items",
    "title": "VINTAGE HERITAGE Banarasi SARI Silk+ Silver",
    "description": "VINTAGE HERITAGE Banarasi SARI Silk+ Silver — Gramercy",
    "price": "$159",
    "location": "Gramercy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 215,
    "category": "items",
    "title": "FRENCH  GODINGER &amp; Co. DINNER PLATE w/ Lined Border c.2006 &#39;Tribeca&#39;",
    "description": "FRENCH  GODINGER &amp; Co. DINNER PLATE w/ Lined Border c.2006 &#39;Tribeca&#39; — Gramercy",
    "price": "$56",
    "location": "Gramercy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 216,
    "category": "items",
    "title": "Vintage Kalp-Son Rattan Co. Elegant Mid-century Rattan Swivel Chairs",
    "description": "Vintage Kalp-Son Rattan Co. Elegant Mid-century Rattan Swivel Chairs — Armonk",
    "price": "$250",
    "location": "Armonk",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 217,
    "category": "items",
    "title": "LV + GUCCI + PRADA Bags + Boxes /  COLLECTION",
    "description": "LV + GUCCI + PRADA Bags + Boxes /  COLLECTION — Gramercy",
    "price": "$10",
    "location": "Gramercy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 218,
    "category": "items",
    "title": "3D printed SPLIT CUPS for paint / SPLASH N COLOR",
    "description": "3D printed SPLIT CUPS for paint / SPLASH N COLOR — Gramercy",
    "price": "$20",
    "location": "Gramercy",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 219,
    "category": "items",
    "title": "Lot of 2 Scientific Apparatus Pyrex Laboratory Glass",
    "description": "Lot of 2 Scientific Apparatus Pyrex Laboratory Glass — Armonk",
    "price": "$100",
    "location": "Armonk",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 220,
    "category": "items",
    "title": "Coleman Quick Air Pump",
    "description": "Coleman Quick Air Pump — North Hollywood",
    "price": "$5",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 221,
    "category": "items",
    "title": "Like New Electric Toothbrush with Brush and Charger.",
    "description": "Like New Electric Toothbrush with Brush and Charger. — North Hollywood",
    "price": "$10",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 222,
    "category": "items",
    "title": "New Metal Dustpan very clean and lightly used Broom.",
    "description": "New Metal Dustpan very clean and lightly used Broom. — North Hollywood",
    "price": "$1",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 223,
    "category": "items",
    "title": "Original mid-1940s OUTLAW movie poster – Jane Russell, Jack Buetel",
    "description": "Original mid-1940s OUTLAW movie poster – Jane Russell, Jack Buetel — central LA 213/323",
    "price": "$10,000",
    "location": "central LA 213/323",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 224,
    "category": "items",
    "title": "USB Charging Station 10 Ports.",
    "description": "USB Charging Station 10 Ports. — North Hollywood",
    "price": "$5",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 225,
    "category": "items",
    "title": "Women&#39;s Cothing; skirts, dresses, jackets, pants, tops and blouses",
    "description": "Women&#39;s Cothing; skirts, dresses, jackets, pants, tops and blouses — Los Angeles",
    "price": "$10",
    "location": "Los Angeles",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 226,
    "category": "items",
    "title": "Original Art: Golden Silver Bronze Age Comics DAVE SIMONS Flash Gordon",
    "description": "Original Art: Golden Silver Bronze Age Comics DAVE SIMONS Flash Gordon — San Diego",
    "price": "$340",
    "location": "San Diego",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 227,
    "category": "items",
    "title": "4X New Exercise Workout items.",
    "description": "4X New Exercise Workout items. — North Hollywood",
    "price": "$10",
    "location": "North Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 228,
    "category": "items",
    "title": "Mirakel Neck and Shoulder Massager with Heat",
    "description": "Mirakel Neck and Shoulder Massager with Heat — Novato",
    "price": "$20",
    "location": "Novato",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 229,
    "category": "items",
    "title": "Vintage Torelli Corsa Strada – Italian Steel Road Bike Early–Mid 1990s",
    "description": "Vintage Torelli Corsa Strada – Italian Steel Road Bike Early–Mid 1990s — city of san francisco",
    "price": "$300",
    "location": "city of san francisco",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 230,
    "category": "items",
    "title": "Skywave Pit-Raod 1/700 Scale DD-436 Monssen US Navy Destroyer Model ki",
    "description": "Skywave Pit-Raod 1/700 Scale DD-436 Monssen US Navy Destroyer Model ki — pittsburg / antioch",
    "price": "$60",
    "location": "pittsburg / antioch",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 231,
    "category": "items",
    "title": "Jade Pothos in Hanging Basket, Epipremnum Aureum Jade",
    "description": "Jade Pothos in Hanging Basket, Epipremnum Aureum Jade — fremont / union city / newark",
    "price": "$10",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 232,
    "category": "items",
    "title": "Jade Pothos in Hanging Basket, Epipremnum Aureum Jade",
    "description": "Jade Pothos in Hanging Basket, Epipremnum Aureum Jade — fremont / union city / newark",
    "price": "$10",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 233,
    "category": "items",
    "title": "New Exterior Galvanized Smooth Shank Nails And Drywall Screws ,Nails",
    "description": "New Exterior Galvanized Smooth Shank Nails And Drywall Screws ,Nails — fremont / union city / newark",
    "price": "$4",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 234,
    "category": "items",
    "title": "Micro Mini scooter",
    "description": "Micro Mini scooter — berkeley",
    "price": "$20",
    "location": "berkeley",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 235,
    "category": "items",
    "title": "Free Couch",
    "description": "Free Couch — palo alto",
    "price": "$0",
    "location": "palo alto",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 236,
    "category": "vehicles",
    "title": "Audi A6 Premium Sport",
    "description": "Audi A6 Premium Sport — Brooklyn",
    "price": "$8,600",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 237,
    "category": "vehicles",
    "title": "2017 Toyota RAV4 XLE – Low Miles – Clean Title – Ready to Drive",
    "description": "2017 Toyota RAV4 XLE – Low Miles – Clean Title – Ready to Drive — manhattan",
    "price": "$4,288",
    "location": "manhattan",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 238,
    "category": "vehicles",
    "title": "2004 jeep wrangler unlimited 135k great shape",
    "description": "2004 jeep wrangler unlimited 135k great shape — Midwood",
    "price": "$5,400",
    "location": "Midwood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 239,
    "category": "vehicles",
    "title": "2024 Audi Q5 quattro S line Prem Plus 45 TFSI AWD Premium 4dr S Call/Text 516- 6",
    "description": "2024 Audi Q5 quattro S line Prem Plus 45 TFSI AWD Premium 4dr S Call/Text 516- 6 — + EVERYONE FINANCED!!  PODEMOS FINANCIAR A CUALQUIERA!",
    "price": "$25,995",
    "location": "+ EVERYONE FINANCED!!  PODEMOS FINANCIAR A CUALQUIERA!",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 240,
    "category": "vehicles",
    "title": "Toyota FJ Cruiser 2008",
    "description": "Toyota FJ Cruiser 2008 — westchester",
    "price": "$8,450",
    "location": "westchester",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 241,
    "category": "vehicles",
    "title": "Up for sale 2015 Hyundai Azera",
    "description": "Up for sale 2015 Hyundai Azera — Brooklyn",
    "price": "$5,500",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 242,
    "category": "vehicles",
    "title": "2010 Acura RDX 125k clean Runs well NEG",
    "description": "2010 Acura RDX 125k clean Runs well NEG — Queens Village",
    "price": "$4,950",
    "location": "Queens Village",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 243,
    "category": "vehicles",
    "title": "2011 Nissan Sentra 2.0 S 4dr Sedan",
    "description": "2011 Nissan Sentra 2.0 S 4dr Sedan — East Brunswick, NJ",
    "price": "$3,800",
    "location": "East Brunswick, NJ",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 244,
    "category": "vehicles",
    "title": "2008 Honda Civic LX Clean title Passed Smog 4-CYLINDERS GAS SAVER",
    "description": "2008 Honda Civic LX Clean title Passed Smog 4-CYLINDERS GAS SAVER — Orange County",
    "price": "$4,750",
    "location": "Orange County",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 245,
    "category": "vehicles",
    "title": "2013 TOYOTA PRIUS HYBRID 190.000 MILES $ 5800",
    "description": "2013 TOYOTA PRIUS HYBRID 190.000 MILES $ 5800 — ORIGINAL CATALYTIC CONVERTER",
    "price": "$5,800",
    "location": "ORIGINAL CATALYTIC CONVERTER",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 246,
    "category": "vehicles",
    "title": "2003 Volvo S60 Compact Family Sedan 115,000 ORG OWNR Runs EXCLNT 35MPG",
    "description": "2003 Volvo S60 Compact Family Sedan 115,000 ORG OWNR Runs EXCLNT 35MPG — Los Angeles/Hollywood",
    "price": "$3,000",
    "location": "Los Angeles/Hollywood",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 247,
    "category": "vehicles",
    "title": "2020 Bmw X5 sdrive40i Sdrive40i sport utility 4d",
    "description": "2020 Bmw X5 sdrive40i Sdrive40i sport utility 4d — - as low as $499 Down Payment o.a.c.",
    "price": "$0",
    "location": "- as low as $499 Down Payment o.a.c.",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": true
  },
  {
    "id": 248,
    "category": "vehicles",
    "title": "2017 Chevrolet Cruze Chevy LT Auto Sedan",
    "description": "2017 Chevrolet Cruze Chevy LT Auto Sedan — Fremont &amp; Purdon Auto Sales",
    "price": "$8,795",
    "location": "Fremont &amp; Purdon Auto Sales",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 249,
    "category": "vehicles",
    "title": "2018 *BMW* *X1 *xDrive28i Sports Activity Vehicle* Alpi",
    "description": "2018 *BMW* *X1 *xDrive28i Sports Activity Vehicle* Alpi — No Junk Fee Dealership",
    "price": "$17,995",
    "location": "No Junk Fee Dealership",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 250,
    "category": "vehicles",
    "title": "2013 *BMW* *X3 *xDrive28i* Alpine White",
    "description": "2013 *BMW* *X3 *xDrive28i* Alpine White — No Junk Fee Dealership",
    "price": "$10,995",
    "location": "No Junk Fee Dealership",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  },
  {
    "id": 251,
    "category": "vehicles",
    "title": "2005 Toyota RAV4",
    "description": "2005 Toyota RAV4 — Long Beach",
    "price": "$2,350",
    "location": "Long Beach",
    "languages": [
      "en"
    ],
    "contact": "See listing",
    "posted": "2026-06-10",
    "featured": false
  }
];
