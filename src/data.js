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

// Auto-updated listings (last update: 2026-06-11T08:01:21.266Z)
export const SAMPLE_LISTINGS = [
  {
    "id": 100,
    "category": "housing",
    "title": "East Village Spacious 1BR – Near Tompkins Square Park Area",
    "description": "East Village Spacious 1BR – Near Tompkins Square Park Area — Manhattan",
    "price": "$1,600",
    "location": "Manhattan",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/mnh/apa/d/new-york-east-village-spacious-1br-near/7940209596.html"
  },
  {
    "id": 101,
    "category": "housing",
    "title": "Murray Hill 1BR – Bright & Spacious",
    "description": "Murray Hill 1BR – Bright & Spacious — Murray Hill",
    "price": "$1,498",
    "location": "Murray Hill",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/que/apa/d/flushing-murray-hill-1br-bright-spacious/7940209382.html"
  },
  {
    "id": 102,
    "category": "housing",
    "title": "1 Bedroom rego park",
    "description": "1 Bedroom rego park — Rego Park",
    "price": "$2,600",
    "location": "Rego Park",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/que/apa/d/rego-park-bedroom-rego-park/7940209293.html"
  },
  {
    "id": 103,
    "category": "housing",
    "title": "Harlem Modern 1BR – Renovated Manhattan Living Space",
    "description": "Harlem Modern 1BR – Renovated Manhattan Living Space — manhattan",
    "price": "$1,600",
    "location": "manhattan",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/mnh/apa/d/new-york-harlem-modern-1br-renovated/7940209113.html"
  },
  {
    "id": 104,
    "category": "housing",
    "title": "Carroll Gardens 1BR – Bright & Spacious",
    "description": "Carroll Gardens 1BR – Bright & Spacious — Cobble Hill",
    "price": "$1,777",
    "location": "Cobble Hill",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/apa/d/brooklyn-carroll-gardens-1br-bright/7940209071.html"
  },
  {
    "id": 105,
    "category": "housing",
    "title": "Studio Apartment in a Beautiful Mansion Light & Gas Included",
    "description": "Studio Apartment in a Beautiful Mansion Light & Gas Included — crown heights",
    "price": "$1,795",
    "location": "crown heights",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/apa/d/brooklyn-studio-apartment-in-beautiful/7940205802.html"
  },
  {
    "id": 106,
    "category": "housing",
    "title": "Large 3BR apartment 2nd floor + Balcony",
    "description": "Large 3BR apartment 2nd floor + Balcony — Bensonhurst",
    "price": "$3,300",
    "location": "Bensonhurst",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/apa/d/brooklyn-large-3br-apartment-2nd-floor/7940204868.html"
  },
  {
    "id": 107,
    "category": "housing",
    "title": "Douglaston Three Bedrooms Two Full Baths",
    "description": "Douglaston Three Bedrooms Two Full Baths — Douglaston",
    "price": "$3,200",
    "location": "Douglaston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/que/apa/d/little-neck-douglaston-three-bedrooms/7940204852.html"
  },
  {
    "id": 108,
    "category": "housing",
    "title": "Barbecues, Range and Oven, Dishwasher",
    "description": "Barbecues, Range and Oven, Dishwasher — Santa Clarita",
    "price": "$2,839",
    "location": "Santa Clarita",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/ant/apa/d/canyon-country-barbecues-range-and-oven/7937992182.html"
  },
  {
    "id": 109,
    "category": "housing",
    "title": "Newly Remodeled Upper Level One Bedroom Parking Included",
    "description": "Newly Remodeled Upper Level One Bedroom Parking Included — North Hills",
    "price": "$1,750",
    "location": "North Hills",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/apa/d/north-hills-newly-remodeled-upper-level/7940208400.html"
  },
  {
    "id": 110,
    "category": "housing",
    "title": "Stop Looking & Start Living at Villa Del Sol!  Studio, Patio, Pool!",
    "description": "Stop Looking & Start Living at Villa Del Sol!  Studio, Patio, Pool! — Chatsworth",
    "price": "$1,515",
    "location": "Chatsworth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/apa/d/chatsworth-stop-looking-start-living-at/7937589775.html"
  },
  {
    "id": 111,
    "category": "housing",
    "title": "Berber Carpeting, ATM Machine, Closet Organizers",
    "description": "Berber Carpeting, ATM Machine, Closet Organizers — 616 St. Paul Ave., Los Angeles, CA",
    "price": "$2,109",
    "location": "616 St. Paul Ave., Los Angeles, CA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/lac/apa/d/los-angeles-berber-carpeting-atm/7940209316.html"
  },
  {
    "id": 112,
    "category": "housing",
    "title": "2 Bed, Jogging Track, Friendly and Great Staff",
    "description": "2 Bed, Jogging Track, Friendly and Great Staff — 722 Bixel St., Los Angeles, CA",
    "price": "$2,499",
    "location": "722 Bixel St., Los Angeles, CA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/lac/apa/d/los-angeles-bed-jogging-track-friendly/7939755810.html"
  },
  {
    "id": 113,
    "category": "housing",
    "title": "Laundry Facilities, Covered Parking, Gas Range",
    "description": "Laundry Facilities, Covered Parking, Gas Range — westside-southbay-310",
    "price": "$1,825",
    "location": "westside-southbay-310",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/wst/apa/d/torrance-laundry-facilities-covered/7936886221.html"
  },
  {
    "id": 114,
    "category": "housing",
    "title": "Dishwasher, Stove, Central AC/Heat",
    "description": "Dishwasher, Stove, Central AC/Heat — 1537 7th St, Santa Monica, CA",
    "price": "$2,430",
    "location": "1537 7th St, Santa Monica, CA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/apa/d/santa-monica-dishwasher-stove-central/7935907778.html"
  },
  {
    "id": 115,
    "category": "housing",
    "title": "Beautiful One Bedroom with Pool, Pilates, Dance Studio & More!!!",
    "description": "Beautiful One Bedroom with Pool, Pilates, Dance Studio & More!!! — Sherman Oaks",
    "price": "$2,635",
    "location": "Sherman Oaks",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/sfv/apa/d/sherman-oaks-beautiful-one-bedroom-with/7937142913.html"
  },
  {
    "id": 116,
    "category": "housing",
    "title": "FULLY EQUIPPED KITCHEN, IN UNIT WASHER & DRYER, CARPORT PARKING",
    "description": "FULLY EQUIPPED KITCHEN, IN UNIT WASHER & DRYER, CARPORT PARKING — hayward / castro valley",
    "price": "$2,314",
    "location": "hayward / castro valley",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/eby/apa/d/hayward-fully-equipped-kitchen-in-unit/7936322116.html"
  },
  {
    "id": 117,
    "category": "housing",
    "title": "Ideal 2BR Town Home, Large patio, Modern kitchen, Spacious living room",
    "description": "Ideal 2BR Town Home, Large patio, Modern kitchen, Spacious living room — hercules, pinole, san pablo, el sob",
    "price": "$2,895",
    "location": "hercules, pinole, san pablo, el sob",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/apa/d/richmond-ideal-2br-town-home-large/7938885584.html"
  },
  {
    "id": 118,
    "category": "housing",
    "title": "Central Heating, Assigned Parking, Courtyard",
    "description": "Central Heating, Assigned Parking, Courtyard — alameda",
    "price": "$3,060",
    "location": "alameda",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/apa/d/emeryville-central-heating-assigned/7935620016.html"
  },
  {
    "id": 119,
    "category": "housing",
    "title": "Luxury 1b/1b,   private backyard, quiet neighborhood, no appl. fees",
    "description": "Luxury 1b/1b,   private backyard, quiet neighborhood, no appl. fees — santa cruz",
    "price": "$2,720",
    "location": "santa cruz",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/scz/apa/d/capitola-luxury-1b-1b-private-backyard/7938601993.html"
  },
  {
    "id": 120,
    "category": "housing",
    "title": "One Month Free!! Street-Facing Private Room near Financial District!",
    "description": "One Month Free!! Street-Facing Private Room near Financial District! — financial district",
    "price": "$999",
    "location": "financial district",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sfc/apa/d/san-francisco-one-month-free-street/7940207792.html"
  },
  {
    "id": 121,
    "category": "housing",
    "title": "$1335 / 2 Bedrooms – 1 Bath – San Francisco – Pets OK – NO Smoking",
    "description": "$1335 / 2 Bedrooms – 1 Bath – San Francisco – Pets OK – NO Smoking — San Francisco, CA",
    "price": "$1,335",
    "location": "San Francisco, CA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/sfc/apa/d/san-francisco-bedrooms-bath-san/7940208018.html"
  },
  {
    "id": 122,
    "category": "housing",
    "title": "Dishwasher, Co-Working Conference Room Spaces, 2B/2B",
    "description": "Dishwasher, Co-Working Conference Room Spaces, 2B/2B — oakland downtown",
    "price": "$2,682",
    "location": "oakland downtown",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/apa/d/oakland-dishwasher-co-working/7935810600.html"
  },
  {
    "id": 123,
    "category": "housing",
    "title": "COMPLETELY REMODELED one bedroom steps from Polk St",
    "description": "COMPLETELY REMODELED one bedroom steps from Polk St — russian hill",
    "price": "$3,750",
    "location": "russian hill",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sfc/apa/d/san-francisco-completely-remodeled-one/7940209034.html"
  },
  {
    "id": 124,
    "category": "housing",
    "title": "tridel luxury spacious 1 bed boutique condo rooftop pool",
    "description": "tridel luxury spacious 1 bed boutique condo rooftop pool — DUPONT AND OSSIGHTON",
    "price": "$2,090",
    "location": "DUPONT AND OSSIGHTON",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://toronto.craigslist.org/tor/apa/d/downtown-toronto-tridel-luxury-spacious/7939515944.html"
  },
  {
    "id": 125,
    "category": "housing",
    "title": "SPACIOUS 1 BED MAIN LEVEL EXPOSED BRICK WITH BACKYARD",
    "description": "SPACIOUS 1 BED MAIN LEVEL EXPOSED BRICK WITH BACKYARD — DUNDAS AND KEELE",
    "price": "$2,200",
    "location": "DUNDAS AND KEELE",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/toronto-spacious-bed-main-level-exposed/7939517339.html"
  },
  {
    "id": 126,
    "category": "housing",
    "title": "FUSE CONDOS 2 BEDS 1 BATH WITH PARKING INCLD",
    "description": "FUSE CONDOS 2 BEDS 1 BATH WITH PARKING INCLD — dupont and dufferin",
    "price": "$2,500",
    "location": "dupont and dufferin",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://toronto.craigslist.org/tor/apa/d/west-toronto-fuse-condos-beds-bath-with/7939518850.html"
  },
  {
    "id": 127,
    "category": "housing",
    "title": "TOP LEVEL 2+1 1 BATH WITH W/O DECK",
    "description": "TOP LEVEL 2+1 1 BATH WITH W/O DECK — LITTLE PORTUGAL",
    "price": "$2,550",
    "location": "LITTLE PORTUGAL",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/west-toronto-top-level-21-bath-with-o/7939519334.html"
  },
  {
    "id": 128,
    "category": "housing",
    "title": "INCREDIBLE VALUE 2 BEDS 2 BATHS BRAND NEW",
    "description": "INCREDIBLE VALUE 2 BEDS 2 BATHS BRAND NEW — dupont and dufferin",
    "price": "$2,300",
    "location": "dupont and dufferin",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/west-toronto-incredible-value-beds/7939518422.html"
  },
  {
    "id": 129,
    "category": "housing",
    "title": "LUXURY CONDO 2 BEDS 2 BATHS WITH OUTDOOR POOL",
    "description": "LUXURY CONDO 2 BEDS 2 BATHS WITH OUTDOOR POOL — dupont and dufferin",
    "price": "$2,600",
    "location": "dupont and dufferin",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/west-toronto-luxury-condo-beds-baths/7939519795.html"
  },
  {
    "id": 130,
    "category": "housing",
    "title": "FUSE CONDOS 2 BEDS 2 BATHS CORNER UNIT",
    "description": "FUSE CONDOS 2 BEDS 2 BATHS CORNER UNIT — dupont and dufferin",
    "price": "$2,675",
    "location": "dupont and dufferin",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/west-toronto-fuse-condos-beds-baths/7939520094.html"
  },
  {
    "id": 131,
    "category": "housing",
    "title": "PENTHOUSE LEVEL 2 BEDS 1 BATH WITH PARKING INCLD AND XTRA LARGE BALCON",
    "description": "PENTHOUSE LEVEL 2 BEDS 1 BATH WITH PARKING INCLD AND XTRA LARGE BALCON — DUPONT AND LANSDOWNE",
    "price": "$2,100",
    "location": "DUPONT AND LANSDOWNE",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://toronto.craigslist.org/tor/apa/d/west-toronto-penthouse-level-beds-bath/7938963618.html"
  },
  {
    "id": 132,
    "category": "housing",
    "title": "Pier West - Beautiful waterfront development by BOSA",
    "description": "Pier West - Beautiful waterfront development by BOSA — burnaby/newwest",
    "price": "$2,400",
    "location": "burnaby/newwest",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/bnc/apa/d/new-westminster-southwest-pier-west/7940209402.html"
  },
  {
    "id": 133,
    "category": "housing",
    "title": "in Vancouver BC, 1/BD, Elevator",
    "description": "in Vancouver BC, 1/BD, Elevator — city of vancouver",
    "price": "$2,665",
    "location": "city of vancouver",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://vancouver.craigslist.org/van/apa/d/vancouver-in-vancouver-bc-bd-elevator/7935931083.html"
  },
  {
    "id": 134,
    "category": "housing",
    "title": "Tennis Court, In-suite Laundry, Social Room",
    "description": "Tennis Court, In-suite Laundry, Social Room — 5050 Sanders St, Burnaby, BC",
    "price": "$2,025",
    "location": "5050 Sanders St, Burnaby, BC",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/bnc/apa/d/burnaby-tennis-court-in-suite-laundry/7930690750.html"
  },
  {
    "id": 135,
    "category": "housing",
    "title": "Close to Skytrains, Steps from Stanley Park, Close to the West End",
    "description": "Close to Skytrains, Steps from Stanley Park, Close to the West End — 1045 Haro St, Vancouver, BC",
    "price": "$2,950",
    "location": "1045 Haro St, Vancouver, BC",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/van/apa/d/vancouver-close-to-skytrains-steps-from/7939211316.html"
  },
  {
    "id": 136,
    "category": "housing",
    "title": "2 Bedroom 2 bathroom plus Den penthouse (Vancouver)",
    "description": "2 Bedroom 2 bathroom plus Den penthouse (Vancouver)",
    "price": "$2,850",
    "location": "Vancouver",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/van/apa/d/vancouver-bedroom-bathroom-plus-den/7939150826.html"
  },
  {
    "id": 137,
    "category": "housing",
    "title": "2 Level - 2 Bedroom Spacious unit in New Westminster",
    "description": "2 Level - 2 Bedroom Spacious unit in New Westminster — New Westminster 12 St",
    "price": "$2,250",
    "location": "New Westminster 12 St",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/bnc/apa/d/new-westminster-southwest-level-bedroom/7938157077.html"
  },
  {
    "id": 138,
    "category": "housing",
    "title": "Killarney 3 Bedroom 2 bathroom UPPER FLOOR",
    "description": "Killarney 3 Bedroom 2 bathroom UPPER FLOOR — Killarney @ Kerr and E49",
    "price": "$2,800",
    "location": "Killarney @ Kerr and E49",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://vancouver.craigslist.org/van/apa/d/vancouver-killarney-bedroom-bathroom/7932361355.html"
  },
  {
    "id": 139,
    "category": "housing",
    "title": "Station Square - 37th Floor- Junior 1 Bedroom Condo nice view",
    "description": "Station Square - 37th Floor- Junior 1 Bedroom Condo nice view — Metrotown Burnaby",
    "price": "$2,200",
    "location": "Metrotown Burnaby",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/bnc/apa/d/burnaby-station-square-37th-floor/7936558937.html"
  },
  {
    "id": 140,
    "category": "housing",
    "title": "2B/1.5B, Outdoor Playground, In Tacoma",
    "description": "2B/1.5B, Outdoor Playground, In Tacoma — 3509 South Orchard Street, Tacoma, WA",
    "price": "$1,899",
    "location": "3509 South Orchard Street, Tacoma, WA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/tac/apa/d/tacoma-2b-15b-outdoor-playground-in/7937580280.html"
  },
  {
    "id": 141,
    "category": "housing",
    "title": "Limited Time Move-In Special - Rooms Going Fast, 1st Month Discount!",
    "description": "Limited Time Move-In Special - Rooms Going Fast, 1st Month Discount! — 7045 180th Ave NE, Redmond, WA",
    "price": "$1,400",
    "location": "7045 180th Ave NE, Redmond, WA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://seattle.craigslist.org/est/apa/d/redmond-limited-time-move-in-special/7937463097.html"
  },
  {
    "id": 142,
    "category": "housing",
    "title": "In Home Stackable Washer/Dryer, Guest Parking, 1/BD 1/BA",
    "description": "In Home Stackable Washer/Dryer, Guest Parking, 1/BD 1/BA — 1324 Mill Creek Blvd, Mill Creek, WA",
    "price": "$1,891",
    "location": "1324 Mill Creek Blvd, Mill Creek, WA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/see/apa/d/bothell-in-home-stackable-washer-dryer/7938170177.html"
  },
  {
    "id": 143,
    "category": "housing",
    "title": "BBQ / Picnic Area, Playground, Electric Range",
    "description": "BBQ / Picnic Area, Playground, Electric Range — 19800 50th Ave W, Lynnwood, WA",
    "price": "$1,550",
    "location": "19800 50th Ave W, Lynnwood, WA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/sno/apa/d/lynnwood-bbq-picnic-area-playground/7935584003.html"
  },
  {
    "id": 144,
    "category": "housing",
    "title": "Washer and Dryer Connections Available, Patio, 2BD 1.5BA",
    "description": "Washer and Dryer Connections Available, Patio, 2BD 1.5BA — 18111 25th Ave NE, Marysville, WA",
    "price": "$2,315",
    "location": "18111 25th Ave NE, Marysville, WA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/sno/apa/d/marysville-washer-and-dryer-connections/7939306054.html"
  },
  {
    "id": 145,
    "category": "housing",
    "title": "Playground, 3 Bed, Issaquah WA",
    "description": "Playground, 3 Bed, Issaquah WA — 280 SW Clark St, Issaquah, WA",
    "price": "$2,150",
    "location": "280 SW Clark St, Issaquah, WA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/est/apa/d/issaquah-playground-bed-issaquah-wa/7934342330.html"
  },
  {
    "id": 146,
    "category": "housing",
    "title": "in Tacoma WA, 2B/2B, Cable Ready",
    "description": "in Tacoma WA, 2B/2B, Cable Ready — 601 South Shirley Street, Tacoma, WA",
    "price": "$2,173",
    "location": "601 South Shirley Street, Tacoma, WA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/tac/apa/d/tacoma-in-tacoma-wa-2b-2b-cable-ready/7936702808.html"
  },
  {
    "id": 147,
    "category": "housing",
    "title": "3BR, 2BA Courtyard View, Corner Apartment, with Garage Included!",
    "description": "3BR, 2BA Courtyard View, Corner Apartment, with Garage Included! — 13315 45th Ave SE, Seattle-Tacoma, WA",
    "price": "$3,060",
    "location": "13315 45th Ave SE, Seattle-Tacoma, WA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/sno/apa/d/everett-3br-2ba-courtyard-view-corner/7937172486.html"
  },
  {
    "id": 148,
    "category": "housing",
    "title": "Austin Modern 1BR – Renovated Chicago Living Space",
    "description": "Austin Modern 1BR – Renovated Chicago Living Space",
    "price": "$1,600",
    "location": "Chicago",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-austin-modern-1br-renovated/7940207151.html"
  },
  {
    "id": 149,
    "category": "housing",
    "title": "River North 1 Bedroom with private balcony and in unit washer & dryer",
    "description": "River North 1 Bedroom with private balcony and in unit washer & dryer — River North",
    "price": "$2,475",
    "location": "River North",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-river-north-bedroom-with/7940198573.html"
  },
  {
    "id": 150,
    "category": "housing",
    "title": "5 Bed 3 Bath Duplex Down in Wrigley",
    "description": "5 Bed 3 Bath Duplex Down in Wrigley — Lakeview",
    "price": "$6,100",
    "location": "Lakeview",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-bed-bath-duplex-down-in-wrigley/7940196023.html"
  },
  {
    "id": 151,
    "category": "housing",
    "title": "Lakeshore East Studio with hardwood flooring, in unit washer & dryer",
    "description": "Lakeshore East Studio with hardwood flooring, in unit washer & dryer — Lakeshore East",
    "price": "$2,350",
    "location": "Lakeshore East",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-lakeshore-east-studio-with/7940195879.html"
  },
  {
    "id": 152,
    "category": "housing",
    "title": "Lakeshore East Convertible/ 1 Bedroom w/ private balcony, in unit w&d",
    "description": "Lakeshore East Convertible/ 1 Bedroom w/ private balcony, in unit w&d — Lakeshore East",
    "price": "$2,335",
    "location": "Lakeshore East",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-lakeshore-east-convertible/7940195526.html"
  },
  {
    "id": 153,
    "category": "housing",
    "title": "Noble Square 3 Bed 2 Bath Condo For 8/1- Garage parking avail",
    "description": "Noble Square 3 Bed 2 Bath Condo For 8/1- Garage parking avail — Noble Square",
    "price": "$4,395",
    "location": "Noble Square",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-noble-square-bed-bath-condo-for/7940194170.html"
  },
  {
    "id": 154,
    "category": "housing",
    "title": "Top Floor 2 Bed 2 Bath- Entire Garage for Rent!",
    "description": "Top Floor 2 Bed 2 Bath- Entire Garage for Rent! — Wicker Park",
    "price": "$4,100",
    "location": "Wicker Park",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-top-floor-bed-bath-entire/7940194135.html"
  },
  {
    "id": 155,
    "category": "housing",
    "title": "RARE Old Town Townhome Available 7/15",
    "description": "RARE Old Town Townhome Available 7/15",
    "price": "$7,300",
    "location": "Chicago",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-rare-old-town-townhome/7940193946.html"
  },
  {
    "id": 156,
    "category": "housing",
    "title": "On-Site Management, Private Patio, Community Center",
    "description": "On-Site Management, Private Patio, Community Center — 6233 Gulfton, Houston, TX",
    "price": "$730",
    "location": "6233 Gulfton, Houston, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://houston.craigslist.org/apa/d/houston-on-site-management-private/7932380639.html"
  },
  {
    "id": 157,
    "category": "housing",
    "title": "2B/2B, Carport, in Baytown TX",
    "description": "2B/2B, Carport, in Baytown TX — 1601 Garth Rd, Houston, TX",
    "price": "$999",
    "location": "1601 Garth Rd, Houston, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/baytown-2b-2b-carport-in-baytown-tx/7934152925.html"
  },
  {
    "id": 158,
    "category": "housing",
    "title": "Apartment Alternative: No Deposit and Fully Inclusive!",
    "description": "Apartment Alternative: No Deposit and Fully Inclusive! — 121 Baker Rd, Houston, TX",
    "price": "$1,321",
    "location": "121 Baker Rd, Houston, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://houston.craigslist.org/apa/d/barker-apartment-alternative-no-deposit/7937227055.html"
  },
  {
    "id": 159,
    "category": "housing",
    "title": "All-Inclusive Affordable Living - No Hidden Fees",
    "description": "All-Inclusive Affordable Living - No Hidden Fees — 18929 Tomball Pkwy, Houston, TX",
    "price": "$1,036",
    "location": "18929 Tomball Pkwy, Houston, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://houston.craigslist.org/apa/d/houston-all-inclusive-affordable-living/7938792933.html"
  },
  {
    "id": 160,
    "category": "housing",
    "title": "Digital Room Key, 1 BD, Located in Katy",
    "description": "Digital Room Key, 1 BD, Located in Katy — 27780 Parkside St, Katy, TX",
    "price": "$1,499",
    "location": "27780 Parkside St, Katy, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/katy-digital-room-key-bd-located-in-katy/7934919717.html"
  },
  {
    "id": 161,
    "category": "housing",
    "title": "Now Leasing New Beginnings at The Park at Bellagio",
    "description": "Now Leasing New Beginnings at The Park at Bellagio — 50 Miles South of Houston",
    "price": "$1,275",
    "location": "50 Miles South of Houston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/clute-now-leasing-new-beginnings-at-the/7931245983.html"
  },
  {
    "id": 162,
    "category": "housing",
    "title": "Free basic cable TV, Sparkling pool, Kitchenettes",
    "description": "Free basic cable TV, Sparkling pool, Kitchenettes",
    "price": "$304",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/houston-free-basic-cable-tv-sparkling/7938380789.html"
  },
  {
    "id": 163,
    "category": "housing",
    "title": "Budget-Friendly Monthly Rates - No Lease, No Commitment!",
    "description": "Budget-Friendly Monthly Rates - No Lease, No Commitment! — 2551 Interstate 45 N, Conroe, TX",
    "price": "$896",
    "location": "2551 Interstate 45 N, Conroe, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/conroe-budget-friendly-monthly-rates-no/7938314506.html"
  },
  {
    "id": 164,
    "category": "housing",
    "title": "Brighton Sunny 1BR – Great Natural Light & Layout",
    "description": "Brighton Sunny 1BR – Great Natural Light & Layout — boston",
    "price": "$1,700",
    "location": "boston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/brighton-brighton-sunny-1br-great/7940208734.html"
  },
  {
    "id": 165,
    "category": "housing",
    "title": "No broker fee!! Available NOW~ Renovated Studio in Brighton! Students",
    "description": "No broker fee!! Available NOW~ Renovated Studio in Brighton! Students — Brighton",
    "price": "$2,195",
    "location": "Brighton",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/brighton-no-broker-fee-available-now/7940198535.html"
  },
  {
    "id": 166,
    "category": "housing",
    "title": "No broker fee!! SEPT Renovated 2b split in Brighton! Students ok! B li",
    "description": "No broker fee!! SEPT Renovated 2b split in Brighton! Students ok! B li — Brighton",
    "price": "$2,975",
    "location": "Brighton",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://boston.craigslist.org/gbs/apa/d/brighton-no-broker-fee-sept-renovated/7940197838.html"
  },
  {
    "id": 167,
    "category": "housing",
    "title": "No Fee - Beautiful Two Bedroom Apartment",
    "description": "No Fee - Beautiful Two Bedroom Apartment — Roslindale Village",
    "price": "$2,895",
    "location": "Roslindale Village",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/roslindale-no-fee-beautiful-two-bedroom/7940197489.html"
  },
  {
    "id": 168,
    "category": "housing",
    "title": "7/1 - 2BR in Brookline Village, easy access to Longwood, Olmstead Park",
    "description": "7/1 - 2BR in Brookline Village, easy access to Longwood, Olmstead Park — Brookline",
    "price": "$3,100",
    "location": "Brookline",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/brookline-br-in-brookline-village-easy/7940196668.html"
  },
  {
    "id": 169,
    "category": "housing",
    "title": "NO FEE! Available NOW or July- HUGE 1bed split w/Dishwasher in Allston",
    "description": "NO FEE! Available NOW or July- HUGE 1bed split w/Dishwasher in Allston — Allston",
    "price": "$2,675",
    "location": "Allston",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/allston-no-fee-available-now-or-july/7940196331.html"
  },
  {
    "id": 170,
    "category": "housing",
    "title": "NO FEE! Cozy 1b in Allston, available 9/1 DISHWASHER- B line. Students",
    "description": "NO FEE! Cozy 1b in Allston, available 9/1 DISHWASHER- B line. Students — Allston",
    "price": "$2,365",
    "location": "Allston",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/allston-no-fee-cozy-1b-in-allston/7940194267.html"
  },
  {
    "id": 171,
    "category": "housing",
    "title": "Affordable Housing – Rent Reduce - The Artemis at Arlington Heights",
    "description": "Affordable Housing – Rent Reduce - The Artemis at Arlington Heights — Arlington",
    "price": "$2,177",
    "location": "Arlington",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/sob/apa/d/arlington-affordable-housing-rent/7940194150.html"
  },
  {
    "id": 172,
    "category": "housing",
    "title": "Resort-Style Pool & Lush Greenery Every Day! 🌴",
    "description": "Resort-Style Pool & Lush Greenery Every Day! 🌴 — 9873 Lawrence Road, Boynton Beach, FL",
    "price": "$1,999",
    "location": "9873 Lawrence Road, Boynton Beach, FL",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://miami.craigslist.org/pbc/apa/d/boynton-beach-resort-style-pool-lush/7935145138.html"
  },
  {
    "id": 173,
    "category": "housing",
    "title": "Large portion or bulk of the home for rent",
    "description": "Large portion or bulk of the home for rent — Dania Beach",
    "price": "$1,650",
    "location": "Dania Beach",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/brw/apa/d/fort-lauderdale-large-portion-or-bulk/7937619707.html"
  },
  {
    "id": 174,
    "category": "housing",
    "title": "Cable Ready, Easy Access to Shopping, Copy Services",
    "description": "Cable Ready, Easy Access to Shopping, Copy Services — 2500 N Federal Hwy, Boca Raton, FL",
    "price": "$2,520",
    "location": "2500 N Federal Hwy, Boca Raton, FL",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/pbc/apa/d/boca-raton-cable-ready-easy-access-to/7938476368.html"
  },
  {
    "id": 175,
    "category": "housing",
    "title": "Fitness & Tennis Just Steps from Your Door! 🎾",
    "description": "Fitness & Tennis Just Steps from Your Door! 🎾 — 9873 Lawrence Road, Boynton Beach, FL",
    "price": "$2,028",
    "location": "9873 Lawrence Road, Boynton Beach, FL",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/pbc/apa/d/boynton-beach-fitness-tennis-just-steps/7937019007.html"
  },
  {
    "id": 176,
    "category": "housing",
    "title": "Manufactured home",
    "description": "Manufactured home",
    "price": "$1,150",
    "location": "Miami",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/mdc/apa/d/fort-lauderdale-manufactured-home/7940207042.html"
  },
  {
    "id": 177,
    "category": "housing",
    "title": "Efficiency",
    "description": "Efficiency",
    "price": "$1,150",
    "location": "Miami",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/mdc/apa/d/fort-lauderdale-efficiency/7940206702.html"
  },
  {
    "id": 178,
    "category": "housing",
    "title": "Modern 3 Bed Townhouse in Miami | 2 Bath | FOR RENT",
    "description": "Modern 3 Bed Townhouse in Miami | 2 Bath | FOR RENT — miami / dade county",
    "price": "$2,495",
    "location": "miami / dade county",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/mdc/apa/d/miami-modern-bed-townhouse-in-miami/7940206912.html"
  },
  {
    "id": 179,
    "category": "housing",
    "title": "Manufactured home",
    "description": "Manufactured home — MIAMI",
    "price": "$1,150",
    "location": "MIAMI",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://miami.craigslist.org/mdc/apa/d/fort-lauderdale-manufactured-home/7940206659.html"
  },
  {
    "id": 180,
    "category": "services",
    "title": "🚛 BROOKLYN MOVERS – AFFORDABLE FLAT RATE MOVING 🚛\nJUST4MOVE MOVING & STO",
    "description": "🚛 BROOKLYN MOVERS – AFFORDABLE FLAT RATE MOVING 🚛\nJUST4MOVE MOVING & STO — Brooklyn",
    "price": "$0",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/brk/lbs/d/brooklyn-brooklyn-movers-affordable/7940189304.html"
  },
  {
    "id": 181,
    "category": "services",
    "title": "GARBAGE REMOVAL/DEMO/TREE CUTTING /YARD CLEANING (516-688-4452)",
    "description": "GARBAGE REMOVAL/DEMO/TREE CUTTING /YARD CLEANING (516-688-4452) — QUEENS/ BRONX/BROOKLYN/LONGISLAND/ MANHATTAN /NJ/CT",
    "price": "$0",
    "location": "QUEENS/ BRONX/BROOKLYN/LONGISLAND/ MANHATTAN /NJ/CT",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/que/lbs/d/jamaica-garbage-removal-demo-tree/7940187961.html"
  },
  {
    "id": 182,
    "category": "services",
    "title": "D&R movers and delivery",
    "description": "D&R movers and delivery — Mount Vernon",
    "price": "$0",
    "location": "Mount Vernon",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/brx/lbs/d/mount-vernon-dr-movers-and-delivery/7940187092.html"
  },
  {
    "id": 183,
    "category": "services",
    "title": "MOVING? MVXPRESS MOVING 🚐💨 LOCAL / LONG DISTANCE / GARBAGE REMOVAL",
    "description": "MOVING? MVXPRESS MOVING 🚐💨 LOCAL / LONG DISTANCE / GARBAGE REMOVAL — NY,NJ,CT,PA,MD,FL (929)405-4527",
    "price": "$0",
    "location": "NY,NJ,CT,PA,MD,FL (929)405-4527",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/lbs/d/brooklyn-moving-mvxpress-moving-local/7940182229.html"
  },
  {
    "id": 184,
    "category": "services",
    "title": "LAST MINUTE SUPER SAVER MOVING GREAT PRICE 24/7 AVAILABILITY 80$/H",
    "description": "LAST MINUTE SUPER SAVER MOVING GREAT PRICE 24/7 AVAILABILITY 80$/H — NY, Nj and beyond",
    "price": "$0",
    "location": "NY, Nj and beyond",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/mnh/lbs/d/new-york-last-minute-super-saver-moving/7940178966.html"
  },
  {
    "id": 185,
    "category": "services",
    "title": "English man with a van. 25 years of small moves and artwork deliveries",
    "description": "English man with a van. 25 years of small moves and artwork deliveries — 718.855.1101.  www.nyvanman.net",
    "price": "$0",
    "location": "718.855.1101.  www.nyvanman.net",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/lbs/d/brooklyn-english-man-with-van-25-years/7940172710.html"
  },
  {
    "id": 186,
    "category": "services",
    "title": "Hauling and moving services",
    "description": "Hauling and moving services — Long Island",
    "price": "$0",
    "location": "Long Island",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/que/lbs/d/jamaica-hauling-and-moving-services/7940172272.html"
  },
  {
    "id": 187,
    "category": "services",
    "title": "DUMP RUNS & Moving Help",
    "description": "DUMP RUNS & Moving Help — ALL OVER",
    "price": "$0",
    "location": "ALL OVER",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/fct/lbs/d/southport-dump-runs-moving-help/7940167929.html"
  },
  {
    "id": 188,
    "category": "services",
    "title": "🔥🔥 $39 MOVING SPECIAL/ 2 Movers and Truck  CALL NOW🔥🔥",
    "description": "🔥🔥 $39 MOVING SPECIAL/ 2 Movers and Truck  CALL NOW🔥🔥 — Los Angeles County",
    "price": "$0",
    "location": "Los Angeles County",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lac/lbs/d/los-angeles-39-moving-special-movers/7940205298.html"
  },
  {
    "id": 189,
    "category": "services",
    "title": "🚚AFFORDABLE MOVERS LOW RATES/LAST MINUTE AND JUNK REMOVAL SERVICES",
    "description": "🚚AFFORDABLE MOVERS LOW RATES/LAST MINUTE AND JUNK REMOVAL SERVICES — Los Angeles 24hrs 📞 424-508-1047",
    "price": "$0",
    "location": "Los Angeles 24hrs 📞 424-508-1047",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/lbs/d/los-angeles-affordable-movers-low-rates/7940198365.html"
  },
  {
    "id": 190,
    "category": "services",
    "title": "🚛 Two Movers and a Truck – Fast, Reliable & Affordable!",
    "description": "🚛 Two Movers and a Truck – Fast, Reliable & Affordable! — San Fernando",
    "price": "$0",
    "location": "San Fernando",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/lbs/d/san-fernando-two-movers-and-truck-fast/7940196909.html"
  },
  {
    "id": 191,
    "category": "services",
    "title": "🍀 🎯 $55 / HOUR MOVING SPECIAL 🎯 🍀",
    "description": "🍀 🎯 $55 / HOUR MOVING SPECIAL 🎯 🍀 — 🍀 🎯 SMALL JOBS OK ! 🎯 🍀",
    "price": "$0",
    "location": "🍀 🎯 SMALL JOBS OK ! 🎯 🍀",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/lbs/d/los-angeles-55-hour-moving-special/7940192220.html"
  },
  {
    "id": 192,
    "category": "services",
    "title": "Moving-Furniture/Appliance Delivery, Packing, Skilled Pro-EquipMOVERS",
    "description": "Moving-Furniture/Appliance Delivery, Packing, Skilled Pro-EquipMOVERS — All West L.A & More. San Francisco, San Diego, Sacramento",
    "price": "$0",
    "location": "All West L.A & More. San Francisco, San Diego, Sacramento",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/lbs/d/los-angeles-moving-furniture-appliance/7940191744.html"
  },
  {
    "id": 193,
    "category": "services",
    "title": "⭐ PICK UP/DELIVERY & VEHICLE/RV/TRAILER/BOAT HAULING ⭐ 702.551.1717 ⭐",
    "description": "⭐ PICK UP/DELIVERY & VEHICLE/RV/TRAILER/BOAT HAULING ⭐ 702.551.1717 ⭐ — Los Angeles, Surrounding Areas & All 48 States",
    "price": "$0",
    "location": "Los Angeles, Surrounding Areas & All 48 States",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/lbs/d/los-angeles-pick-up-delivery-vehicle-rv/7940191361.html"
  },
  {
    "id": 194,
    "category": "services",
    "title": "🔥➪➪MOVING HELP HERE! Get a FULL SERVICE move at LOW RATES!",
    "description": "🔥➪➪MOVING HELP HERE! Get a FULL SERVICE move at LOW RATES! — 🔥🔥🔥 All",
    "price": "$0",
    "location": "🔥🔥🔥 All",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lac/lbs/d/los-angeles-moving-help-here-get-full/7940186901.html"
  },
  {
    "id": 195,
    "category": "services",
    "title": "____JUNK  & TRASH REMOVAL & HAULING & CLEAN UP   323-289-5916 Jay",
    "description": "____JUNK  & TRASH REMOVAL & HAULING & CLEAN UP   323-289-5916 Jay — Text pictures for FREE Estimates",
    "price": "$0",
    "location": "Text pictures for FREE Estimates",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lac/lbs/d/inglewood-junk-trash-removal-hauling/7940186754.html"
  },
  {
    "id": 196,
    "category": "services",
    "title": "Property Cleanouts, Storage Cleanouts, Demolition, Junk Removal",
    "description": "Property Cleanouts, Storage Cleanouts, Demolition, Junk Removal — vallejo / benicia",
    "price": "$0",
    "location": "vallejo / benicia",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/lbs/d/vallejo-property-cleanouts-storage/7940207390.html"
  },
  {
    "id": 197,
    "category": "services",
    "title": "🌎♻️ 🚚 Junk Removal Same Day Service Available All Bay Area 🌎♻️",
    "description": "🌎♻️ 🚚 Junk Removal Same Day Service Available All Bay Area 🌎♻️ — mountain view",
    "price": "$0",
    "location": "mountain view",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/sby/lbs/d/mountain-view-junk-removal-same-day/7940203161.html"
  },
  {
    "id": 198,
    "category": "services",
    "title": "Junk Removal & Hauling – Fast, Affordable Service",
    "description": "Junk Removal & Hauling – Fast, Affordable Service — Vallejo",
    "price": "$0",
    "location": "Vallejo",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/nby/lbs/d/vallejo-junk-removal-hauling-fast/7940194591.html"
  },
  {
    "id": 199,
    "category": "services",
    "title": "⭐ PICK UP/DELIVERY & VEHICLE/RV/TRAILER/BOAT HAULING ⭐ 702.551.1717 ⭐",
    "description": "⭐ PICK UP/DELIVERY & VEHICLE/RV/TRAILER/BOAT HAULING ⭐ 702.551.1717 ⭐ — San Francisco, Surrounding Areas & All 48 States",
    "price": "$0",
    "location": "San Francisco, Surrounding Areas & All 48 States",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/nby/lbs/d/south-san-francisco-pick-up-delivery/7940191647.html"
  },
  {
    "id": 200,
    "category": "services",
    "title": "HAVE JUNK? BAY AREA JUNK HAULING ✅",
    "description": "HAVE JUNK? BAY AREA JUNK HAULING ✅ — dublin / pleasanton / livermore",
    "price": "$0",
    "location": "dublin / pleasanton / livermore",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/lbs/d/pleasanton-have-junk-bay-area-junk/7940191396.html"
  },
  {
    "id": 201,
    "category": "services",
    "title": "Professional Vehicle Relocation – Class B Licensed Driver (Nationwide)",
    "description": "Professional Vehicle Relocation – Class B Licensed Driver (Nationwide) — city of san francisco",
    "price": "$0",
    "location": "city of san francisco",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sfc/lbs/d/san-francisco-professional-vehicle/7940185932.html"
  },
  {
    "id": 202,
    "category": "services",
    "title": "BAY AREA JUNK HAULING - AVAILABLE TODAY ✅",
    "description": "BAY AREA JUNK HAULING - AVAILABLE TODAY ✅ — ENTIRE BAY AREA",
    "price": "$0",
    "location": "ENTIRE BAY AREA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/eby/lbs/d/fremont-bay-area-junk-hauling-available/7940185788.html"
  },
  {
    "id": 203,
    "category": "services",
    "title": "Hauling service",
    "description": "Hauling service — oakland hills / mills",
    "price": "$0",
    "location": "oakland hills / mills",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/lbs/d/oakland-hauling-service/7940185775.html"
  },
  {
    "id": 204,
    "category": "services",
    "title": "PAT O BRIAN MOVERS $50 Up 416-939-5570",
    "description": "PAT O BRIAN MOVERS $50 Up 416-939-5570",
    "price": "$0",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/lbs/d/toronto-pat-brian-movers-50-up/7940009477.html"
  },
  {
    "id": 205,
    "category": "services",
    "title": "Relaxation Massage for Men , by Male Therapist",
    "description": "Relaxation Massage for Men , by Male Therapist — Toronto West - Etobicoke",
    "price": "$0",
    "location": "Toronto West - Etobicoke",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/lbs/d/etobicoke-relaxation-massage-for-men-by/7939811176.html"
  },
  {
    "id": 206,
    "category": "services",
    "title": "Man With A Van (small moving and delivery) 647 222-3602",
    "description": "Man With A Van (small moving and delivery) 647 222-3602",
    "price": "$0",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://toronto.craigslist.org/tor/lbs/d/toronto-man-with-van-small-moving-and/7939780149.html"
  },
  {
    "id": 207,
    "category": "services",
    "title": "Toronto Long Distance Movers | Canada Wide & USA Moving Specialists",
    "description": "Toronto Long Distance Movers | Canada Wide & USA Moving Specialists",
    "price": "$0",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://toronto.craigslist.org/tor/lbs/d/downtown-toronto-toronto-long-distance/7939678035.html"
  },
  {
    "id": 208,
    "category": "services",
    "title": "2 MEN AND A TRUCK. SMALL DELIVERY AND MOVING. 416-528-9100",
    "description": "2 MEN AND A TRUCK. SMALL DELIVERY AND MOVING. 416-528-9100",
    "price": "$0",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://toronto.craigslist.org/tor/lbs/d/north-york-men-and-truck-small-delivery/7939494766.html"
  },
  {
    "id": 209,
    "category": "services",
    "title": "█ 🖤 █ Toronto Mover $54.50/hr! █ Call📞 TXT WhatsApp +1(416) 999-6683",
    "description": "█ 🖤 █ Toronto Mover $54.50/hr! █ Call📞 TXT WhatsApp +1(416) 999-6683 — Toronto,On",
    "price": "$0",
    "location": "Toronto,On",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/lbs/d/north-york-toronto-mover-5450-hr-call/7939151164.html"
  },
  {
    "id": 210,
    "category": "services",
    "title": "█ 🖤 █ Toronto Mover $54.50/hr! █ Call📞 TXT WhatsApp (416) 875-6683",
    "description": "█ 🖤 █ Toronto Mover $54.50/hr! █ Call📞 TXT WhatsApp (416) 875-6683 — Toronto,On",
    "price": "$0",
    "location": "Toronto,On",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/lbs/d/north-york-toronto-mover-5450-hr-call/7939131853.html"
  },
  {
    "id": 211,
    "category": "services",
    "title": "█ ♣ █ movers SAVE$$$ WITH MAN WITH BIG VAN -TORONTO MOVER-4!6-305-0052",
    "description": "█ ♣ █ movers SAVE$$$ WITH MAN WITH BIG VAN -TORONTO MOVER-4!6-305-0052 — toronto movers-no hidden fee",
    "price": "$0",
    "location": "toronto movers-no hidden fee",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/lbs/d/toronto-movers-save-with-man-with-big/7938934144.html"
  },
  {
    "id": 212,
    "category": "items",
    "title": "Modern Black Sectional Sofa with Ottoman – Stylish & Comfortable",
    "description": "Modern Black Sectional Sofa with Ottoman – Stylish & Comfortable — Fort Worth",
    "price": "$200",
    "location": "Fort Worth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/jsy/fuo/d/fort-worth-modern-black-sectional-sofa/7928587975.html"
  },
  {
    "id": 213,
    "category": "items",
    "title": "Modern Round Coffee Table – Dark Wood Finish",
    "description": "Modern Round Coffee Table – Dark Wood Finish — Fort Worth",
    "price": "$40",
    "location": "Fort Worth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/jsy/fuo/d/fort-worth-modern-round-coffee-table/7928585780.html"
  },
  {
    "id": 214,
    "category": "items",
    "title": "Luxury Black Leather Office Chair – Comfortable & Stylish",
    "description": "Luxury Black Leather Office Chair – Comfortable & Stylish — Fort Worth",
    "price": "$50",
    "location": "Fort Worth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/jsy/fuo/d/fort-worth-luxury-black-leather-office/7928583045.html"
  },
  {
    "id": 215,
    "category": "items",
    "title": "Ergonomic Mesh Office Chair – Adjustable & Comfortable",
    "description": "Ergonomic Mesh Office Chair – Adjustable & Comfortable — Fort Worth",
    "price": "$40",
    "location": "Fort Worth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/jsy/fuo/d/fort-worth-ergonomic-mesh-office-chair/7925313606.html"
  },
  {
    "id": 216,
    "category": "items",
    "title": "Like New Midea 4-Burner Gas Stove with Oven – Stainless Steel",
    "description": "Like New Midea 4-Burner Gas Stove with Oven – Stainless Steel — Fort Worth",
    "price": "$170",
    "location": "Fort Worth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/jsy/app/d/fort-worth-like-new-midea-burner-gas/7925312940.html"
  },
  {
    "id": 217,
    "category": "items",
    "title": "Comfortable Black Leather Office Chair – Swivel & Adjustable",
    "description": "Comfortable Black Leather Office Chair – Swivel & Adjustable — Fort Worth",
    "price": "$60",
    "location": "Fort Worth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/jsy/fuo/d/fort-worth-comfortable-black-leather/7925312511.html"
  },
  {
    "id": 218,
    "category": "items",
    "title": "Modern Gray Sectional Sofa with Ottoman – Clean & Comfortable",
    "description": "Modern Gray Sectional Sofa with Ottoman – Clean & Comfortable — Fort Worth",
    "price": "$150",
    "location": "Fort Worth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/jsy/fuo/d/fort-worth-modern-gray-sectional-sofa/7923223235.html"
  },
  {
    "id": 219,
    "category": "items",
    "title": "Modern Green Velvet Sofa – Stylish & Comfortable",
    "description": "Modern Green Velvet Sofa – Stylish & Comfortable — Fort Worth",
    "price": "$70",
    "location": "Fort Worth",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/jsy/fuo/d/fort-worth-modern-green-velvet-sofa/7923220064.html"
  },
  {
    "id": 220,
    "category": "items",
    "title": "Aquarium fish tank 20gal 12\"x24\"x17\"",
    "description": "Aquarium fish tank 20gal 12\"x24\"x17\" — Torrance",
    "price": "$20",
    "location": "Torrance",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/for/d/torrance-aquarium-fish-tank-20gal/7940209501.html"
  },
  {
    "id": 221,
    "category": "items",
    "title": "2 Feet Ladder Жаиж",
    "description": "2 Feet Ladder Жаиж — Winnetka",
    "price": "$0",
    "location": "Winnetka",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/for/d/winnetka-feet-ladder/7940209415.html"
  },
  {
    "id": 222,
    "category": "items",
    "title": "GAS DRYER 1yr OLD CAN DELIVER NO WASHER",
    "description": "GAS DRYER 1yr OLD CAN DELIVER NO WASHER — antelope valley",
    "price": "$230",
    "location": "antelope valley",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/ant/app/d/lancaster-gas-dryer-1yr-old-can-deliver/7940209396.html"
  },
  {
    "id": 223,
    "category": "items",
    "title": "privacy plants make a large wall with plants, %50 cheaper",
    "description": "privacy plants make a large wall with plants, %50 cheaper — RIVERSIDE",
    "price": "$80",
    "location": "RIVERSIDE",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/for/d/jurupa-valley-privacy-plants-make-large/7937298556.html"
  },
  {
    "id": 224,
    "category": "items",
    "title": "WASHER WORKS GREAT CAN DELIVER NO DRYER",
    "description": "WASHER WORKS GREAT CAN DELIVER NO DRYER — antelope valley",
    "price": "$165",
    "location": "antelope valley",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/ant/app/d/lancaster-washer-works-great-can/7940209240.html"
  },
  {
    "id": 225,
    "category": "items",
    "title": "Inlaid top game table",
    "description": "Inlaid top game table — Redondo Beach",
    "price": "$950",
    "location": "Redondo Beach",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/wst/atq/d/redondo-beach-inlaid-top-game-table/7904160031.html"
  },
  {
    "id": 226,
    "category": "items",
    "title": "Antique gilt wood mirror. Column side with folia",
    "description": "Antique gilt wood mirror. Column side with folia — Redondo Beach",
    "price": "$2,000",
    "location": "Redondo Beach",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/fuo/d/redondo-beach-antique-gilt-wood-mirror/7912327831.html"
  },
  {
    "id": 227,
    "category": "items",
    "title": "Vintage caeved wooden leather top side table",
    "description": "Vintage caeved wooden leather top side table — Redondo Beach",
    "price": "$400",
    "location": "Redondo Beach",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/atq/d/redondo-beach-vintage-caeved-wooden/7913374275.html"
  },
  {
    "id": 228,
    "category": "items",
    "title": "Brand New Cordless Vacuum Cleaner 650W 55KPa 70Mins",
    "description": "Brand New Cordless Vacuum Cleaner 650W 55KPa 70Mins — San Lorenzo",
    "price": "$120",
    "location": "San Lorenzo",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/for/d/san-lorenzo-brand-new-cordless-vacuum/7934849538.html"
  },
  {
    "id": 229,
    "category": "items",
    "title": "Brand New 30\" W x 12\" D x 62\" H Garage Storage Rack (Not for Heavy Duty)",
    "description": "Brand New 30\" W x 12\" D x 62\" H Garage Storage Rack (Not for Heavy Duty) — San Lorenzo",
    "price": "$60",
    "location": "San Lorenzo",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/eby/for/d/san-lorenzo-brand-new-30-x-12-x-62/7937140844.html"
  },
  {
    "id": 230,
    "category": "items",
    "title": "Brand New 52“ Ceiling Fan with Remote Control",
    "description": "Brand New 52“ Ceiling Fan with Remote Control — San Lorenzo",
    "price": "$90",
    "location": "San Lorenzo",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/for/d/san-lorenzo-brand-new-52-ceiling-fan/7936678868.html"
  },
  {
    "id": 231,
    "category": "items",
    "title": "ZAFRO Nugget Ice Maker Countertop with Handle,35Lbs/24Hrs,7 Mins Fast",
    "description": "ZAFRO Nugget Ice Maker Countertop with Handle,35Lbs/24Hrs,7 Mins Fast — south san francisco",
    "price": "$100",
    "location": "south san francisco",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/pen/ele/d/san-bruno-zafro-nugget-ice-maker/7903765049.html"
  },
  {
    "id": 232,
    "category": "items",
    "title": "QOD Electric Golf Caddy (Q1-6) Lithium Battery/Charger *NO REMOTE*",
    "description": "QOD Electric Golf Caddy (Q1-6) Lithium Battery/Charger *NO REMOTE* — san jose south",
    "price": "$1,000",
    "location": "san jose south",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sby/spo/d/san-jose-qod-electric-golf-caddy-q1/7940209465.html"
  },
  {
    "id": 233,
    "category": "items",
    "title": "ZAFRO Nugget Ice Maker Countertop with Handle,35Lbs/24Hrs,7 Mins Fast",
    "description": "ZAFRO Nugget Ice Maker Countertop with Handle,35Lbs/24Hrs,7 Mins Fast — south san francisco",
    "price": "$100",
    "location": "south san francisco",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/pen/app/d/san-bruno-zafro-nugget-ice-maker/7903765078.html"
  },
  {
    "id": 234,
    "category": "items",
    "title": "Slime Compact Tire Inflator with LED Light & Adapters",
    "description": "Slime Compact Tire Inflator with LED Light & Adapters — south san francisco",
    "price": "$20",
    "location": "south san francisco",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/pen/pts/d/san-bruno-slime-compact-tire-inflator/7927485301.html"
  },
  {
    "id": 235,
    "category": "items",
    "title": "Sound DJ-Quake 1&2 Amplifier & 12-Inch Subwoofer 1200-Watt",
    "description": "Sound DJ-Quake 1&2 Amplifier & 12-Inch Subwoofer 1200-Watt — south san francisco",
    "price": "$300",
    "location": "south san francisco",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/pen/ele/d/san-bruno-sound-dj-quake-12-amplifier/7934886888.html"
  },
  {
    "id": 236,
    "category": "vehicles",
    "title": "2023 Mercedes Benz G class",
    "description": "2023 Mercedes Benz G class — westbury",
    "price": "$188,000",
    "location": "westbury",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/lgi/ctd/d/westbury-2023-mercedes-benz-class/7940209251.html"
  },
  {
    "id": 237,
    "category": "vehicles",
    "title": "2015 Toyota Prius",
    "description": "2015 Toyota Prius — Upper West Side",
    "price": "$10,000",
    "location": "Upper West Side",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/mnh/cto/d/new-york-2015-toyota-prius/7940206201.html"
  },
  {
    "id": 238,
    "category": "vehicles",
    "title": "2006 Infiniti M35 (negotiable)",
    "description": "2006 Infiniti M35 (negotiable) — Queens, NY",
    "price": "$3,500",
    "location": "Queens, NY",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/que/cto/d/long-island-city-2006-infiniti-m35/7940199896.html"
  },
  {
    "id": 239,
    "category": "vehicles",
    "title": "2007 BMW 328i",
    "description": "2007 BMW 328i — Roslyn",
    "price": "$4,900",
    "location": "Roslyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/lgi/cto/d/roslyn-2007-bmw-328i/7940199742.html"
  },
  {
    "id": 240,
    "category": "vehicles",
    "title": "2011 Mercedes ML350",
    "description": "2011 Mercedes ML350",
    "price": "$4,950",
    "location": "New York",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/que/cto/d/new-york-2011-mercedes-ml350/7940198635.html"
  },
  {
    "id": 241,
    "category": "vehicles",
    "title": "2011 Mercedes ML350",
    "description": "2011 Mercedes ML350",
    "price": "$4,950",
    "location": "New York",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/brx/cto/d/new-york-2011-mercedes-ml350/7940198288.html"
  },
  {
    "id": 242,
    "category": "vehicles",
    "title": "Nissan Versa Note 2015",
    "description": "Nissan Versa Note 2015 — Brooklyn",
    "price": "$7,000",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/cto/d/brooklyn-nissan-versa-note-2015/7940193968.html"
  },
  {
    "id": 243,
    "category": "vehicles",
    "title": "2018 Nissan Versa Low miles",
    "description": "2018 Nissan Versa Low miles — Brooklyn",
    "price": "$5,900",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/cto/d/brooklyn-2018-nissan-versa-low-miles/7940192527.html"
  },
  {
    "id": 244,
    "category": "vehicles",
    "title": "1964 Ford Falcon Sprint convertible",
    "description": "1964 Ford Falcon Sprint convertible — westside-southbay-310",
    "price": "$25,500",
    "location": "westside-southbay-310",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/cto/d/hermosa-beach-1964-ford-falcon-sprint/7940209030.html"
  },
  {
    "id": 245,
    "category": "vehicles",
    "title": "🚗 BUY OR LEASE YOUR NEXT CAR WITH EASE – NO DEALER HASSLES! 🚗",
    "description": "🚗 BUY OR LEASE YOUR NEXT CAR WITH EASE – NO DEALER HASSLES! 🚗 — westside-southbay-310",
    "price": "$0",
    "location": "westside-southbay-310",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/ctd/d/hawthorne-buy-or-lease-your-next-car/7940206556.html"
  },
  {
    "id": 246,
    "category": "vehicles",
    "title": "2017 Porsche Macan GTS",
    "description": "2017 Porsche Macan GTS",
    "price": "$19,500",
    "location": "Los Angeles",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lac/cto/d/los-angeles-2017-porsche-macan-gts/7940206541.html"
  },
  {
    "id": 247,
    "category": "vehicles",
    "title": "2016 Honda Accord LX",
    "description": "2016 Honda Accord LX",
    "price": "$8,650",
    "location": "Los Angeles",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/lac/cto/d/los-angeles-2016-honda-accord-lx/7940206521.html"
  },
  {
    "id": 248,
    "category": "vehicles",
    "title": "2013 Lexus RX350",
    "description": "2013 Lexus RX350",
    "price": "$13,800",
    "location": "Los Angeles",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lac/cto/d/los-angeles-2013-lexus-rx350/7940206509.html"
  },
  {
    "id": 249,
    "category": "vehicles",
    "title": "79 FORD F-250",
    "description": "79 FORD F-250 — Lynwood",
    "price": "$1,850",
    "location": "Lynwood",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sgv/cto/d/lynwood-79-ford-250/7940206347.html"
  },
  {
    "id": 250,
    "category": "vehicles",
    "title": "2013 Kia Soul",
    "description": "2013 Kia Soul — Huntington Park",
    "price": "$2,500",
    "location": "Huntington Park",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/lac/cto/d/huntington-park-2013-kia-soul/7940206132.html"
  },
  {
    "id": 251,
    "category": "vehicles",
    "title": "▲2008 HONDA CR-V EX-L 2WD 4-CYL *ONE-OWNER* LOW MILES- RELIABLE!►",
    "description": "▲2008 HONDA CR-V EX-L 2WD 4-CYL *ONE-OWNER* LOW MILES- RELIABLE!► — San Luis Obispo",
    "price": "$10,995",
    "location": "San Luis Obispo",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/ctd/d/san-luis-obispo-2008-honda-cr-ex-2wd/7940205961.html"
  }
];
