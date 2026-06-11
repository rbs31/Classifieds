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

// Auto-updated listings (last update: 2026-06-11T00:20:56.769Z)
export const SAMPLE_LISTINGS = [
  {
    "id": 100,
    "category": "housing",
    "title": "Beautiful Renovated 1BR w/ Dining Room | Dishwasher + Laundry 11103",
    "description": "Beautiful Renovated 1BR w/ Dining Room | Dishwasher + Laundry 11103 — Astoria",
    "price": "$1,130",
    "location": "Astoria",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/que/apa/d/new-york-beautiful-renovated-1br-dining/7940170823.html"
  },
  {
    "id": 101,
    "category": "housing",
    "title": "1BR Rent Stabilized with or without Furniture",
    "description": "1BR Rent Stabilized with or without Furniture — Flushing",
    "price": "$2,000",
    "location": "Flushing",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/que/apa/d/flushing-1br-rent-stabilized-with-or/7940067993.html"
  },
  {
    "id": 102,
    "category": "housing",
    "title": "Modern 1-Bedroom Rental in Park Slope, Brooklyn – Near Prospect Park",
    "description": "Modern 1-Bedroom Rental in Park Slope, Brooklyn – Near Prospect Park — Brooklyn",
    "price": "$1,055",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/apa/d/brooklyn-modern-bedroom-rental-in-park/7940167395.html"
  },
  {
    "id": 103,
    "category": "housing",
    "title": "Massive 2BR, Extra Storage,Heat& Hot Water, Private Yard, Laundry Line",
    "description": "Massive 2BR, Extra Storage,Heat& Hot Water, Private Yard, Laundry Line — brooklyn",
    "price": "$3,500",
    "location": "brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/apa/d/ridgewood-massive-2br-extra-storageheat/7940165782.html"
  },
  {
    "id": 104,
    "category": "housing",
    "title": "High-Floor 1BR in Prospect Heights – Skyline Views & In-Unit W/D!",
    "description": "High-Floor 1BR in Prospect Heights – Skyline Views & In-Unit W/D! — Prospect Heights",
    "price": "$1,150",
    "location": "Prospect Heights",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/apa/d/brooklyn-high-floor-1br-in-prospect/7940165745.html"
  },
  {
    "id": 105,
    "category": "housing",
    "title": "Renovated Modern 1 bed/1 bath residence in prime East Village.",
    "description": "Renovated Modern 1 bed/1 bath residence in prime East Village. — East Village",
    "price": "$1,099",
    "location": "East Village",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/apa/d/new-york-renovated-modern-bed-bath/7940163758.html"
  },
  {
    "id": 106,
    "category": "housing",
    "title": "199 Malcolm X - 3 Bedroom Apartment for Rent with private deck.",
    "description": "199 Malcolm X - 3 Bedroom Apartment for Rent with private deck. — Brooklyn",
    "price": "$4,195",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/apa/d/brooklyn-199-malcolm-bedroom-apartment/7940162548.html"
  },
  {
    "id": 107,
    "category": "housing",
    "title": "Bright & Spacious 1BR w/Large Windows & Laundry in building",
    "description": "Bright & Spacious 1BR w/Large Windows & Laundry in building — Bed Stuy",
    "price": "$1,047",
    "location": "Bed Stuy",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/brk/apa/d/brooklyn-bright-spacious-1br-large/7940161938.html"
  },
  {
    "id": 108,
    "category": "housing",
    "title": "Studio Apartment Available NOW near Lakewood Mall!!!",
    "description": "Studio Apartment Available NOW near Lakewood Mall!!! — Lakewood",
    "price": "$2,015",
    "location": "Lakewood",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lgb/apa/d/artesia-studio-apartment-available-now/7938783725.html"
  },
  {
    "id": 109,
    "category": "housing",
    "title": "Studio Close to 101 Freeway - Pool, Covered Parking, Dishwasher, Patio",
    "description": "Studio Close to 101 Freeway - Pool, Covered Parking, Dishwasher, Patio — Sherman Oaks",
    "price": "$1,649",
    "location": "Sherman Oaks",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/apa/d/valley-village-studio-close-to-101/7940170664.html"
  },
  {
    "id": 110,
    "category": "housing",
    "title": "Dishwasher, Microwaves, Clubhouse, Yoga studio",
    "description": "Dishwasher, Microwaves, Clubhouse, Yoga studio — san fernando valley",
    "price": "$2,559",
    "location": "san fernando valley",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/apa/d/woodland-hills-dishwasher-microwaves/7940170663.html"
  },
  {
    "id": 111,
    "category": "housing",
    "title": "TMLP 15-mo. | Must-See 1 BR/1 BA-Gorgeous City Vistas & Resort-Style Perks",
    "description": "TMLP 15-mo. | Must-See 1 BR/1 BA-Gorgeous City Vistas & Resort-Style Perks — Century City",
    "price": "$4,736",
    "location": "Century City",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/wst/apa/d/los-angeles-tmlp-15-mo-must-see-br-ba/7940170644.html"
  },
  {
    "id": 112,
    "category": "housing",
    "title": "TMLP 24-mo. | High-End Living in LA-1 BR with Rooftop Lounge & Sky Views",
    "description": "TMLP 24-mo. | High-End Living in LA-1 BR with Rooftop Lounge & Sky Views — Los Angeles - Social District",
    "price": "$2,846",
    "location": "Los Angeles - Social District",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lac/apa/d/los-angeles-tmlp-24-mo-high-end-living/7940170621.html"
  },
  {
    "id": 113,
    "category": "housing",
    "title": "TMLP 12-mo. | Exclusive 2 BR/2 BA-Loft-Style Living with Clubhouse & Spa",
    "description": "TMLP 12-mo. | Exclusive 2 BR/2 BA-Loft-Style Living with Clubhouse & Spa — Pasadena",
    "price": "$3,919",
    "location": "Pasadena",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/apa/d/pasadena-tmlp-12-mo-exclusive-br-ba/7940170610.html"
  },
  {
    "id": 114,
    "category": "housing",
    "title": "Live in your dream home! 1 Bd/1 ba, 648 SqFt",
    "description": "Live in your dream home! 1 Bd/1 ba, 648 SqFt",
    "price": "$2,511",
    "location": "Los Angeles",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/apa/d/culver-city-live-in-your-dream-home-bd/7939061702.html"
  },
  {
    "id": 115,
    "category": "housing",
    "title": "Edificio tranquilo y limpio renta un apartamento",
    "description": "Edificio tranquilo y limpio renta un apartamento — Panorama City",
    "price": "$2,200",
    "location": "Panorama City",
    "languages": [
      "en",
      "es"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/apa/d/panorama-city-edificio-tranquilo-limpio/7940170566.html"
  },
  {
    "id": 116,
    "category": "housing",
    "title": "TMLP 12-mo. | Expansive windows, Co-working Lounge",
    "description": "TMLP 12-mo. | Expansive windows, Co-working Lounge — santa rosa",
    "price": "$2,783",
    "location": "santa rosa",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/nby/apa/d/santa-rosa-tmlp-12-mo-expansive-windows/7940170708.html"
  },
  {
    "id": 117,
    "category": "housing",
    "title": "Playground, Patio/Balcony, Recycling",
    "description": "Playground, Patio/Balcony, Recycling — san jose downtown",
    "price": "$2,825",
    "location": "san jose downtown",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sby/apa/d/san-jose-playground-patio-balcony/7938796998.html"
  },
  {
    "id": 118,
    "category": "housing",
    "title": "TMLP 12-mo. | Ceiling Fans, Elevator, Range, Lounge",
    "description": "TMLP 12-mo. | Ceiling Fans, Elevator, Range, Lounge — fremont / union city / newark",
    "price": "$4,057",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/eby/apa/d/fremont-tmlp-12-mo-ceiling-fans/7940170686.html"
  },
  {
    "id": 119,
    "category": "housing",
    "title": "Pet-Friendly, 24-Hour Emergency Maintenance, Flexible Lease Terms",
    "description": "Pet-Friendly, 24-Hour Emergency Maintenance, Flexible Lease Terms — fremont / union city / newark",
    "price": "$2,350",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/eby/apa/d/fremont-pet-friendly-24-hour-emergency/7940170676.html"
  },
  {
    "id": 120,
    "category": "housing",
    "title": "San Pablo 2BR apt, Kitchen has it all, LUX bath, Ceiling fans, Pool!",
    "description": "San Pablo 2BR apt, Kitchen has it all, LUX bath, Ceiling fans, Pool! — hercules, pinole, san pablo, el sob",
    "price": "$2,475",
    "location": "hercules, pinole, san pablo, el sob",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/apa/d/richmond-san-pablo-2br-apt-kitchen-has/7935938644.html"
  },
  {
    "id": 121,
    "category": "housing",
    "title": "Stunning 2 BR Retreat-Hardwood Floors & Carport Parking!",
    "description": "Stunning 2 BR Retreat-Hardwood Floors & Carport Parking! — fremont / union city / newark",
    "price": "$2,845",
    "location": "fremont / union city / newark",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/eby/apa/d/newark-stunning-br-retreat-hardwood/7940170641.html"
  },
  {
    "id": 122,
    "category": "housing",
    "title": "Exclusive 2 BR Retreat-Modern Kitchen, Lavish Amenities",
    "description": "Exclusive 2 BR Retreat-Modern Kitchen, Lavish Amenities — napa county",
    "price": "$0",
    "location": "napa county",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/nby/apa/d/napa-exclusive-br-retreat-modern/7940170634.html"
  },
  {
    "id": 123,
    "category": "housing",
    "title": "Downtown San Leandro 2 BR, 2 BA apt w/ AC and new apps.",
    "description": "Downtown San Leandro 2 BR, 2 BA apt w/ AC and new apps. — san leandro",
    "price": "$3,911",
    "location": "san leandro",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/apa/d/san-leandro-downtown-san-leandro-br-ba/7940170613.html"
  },
  {
    "id": 124,
    "category": "housing",
    "title": "Above the shops of Rosedale/Summerhill!! One Bedroom!",
    "description": "Above the shops of Rosedale/Summerhill!! One Bedroom! — Yonge St and Roxborough St. W.",
    "price": "$1,595",
    "location": "Yonge St and Roxborough St. W.",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/toronto-above-the-shops-of-rosedale/7937788670.html"
  },
  {
    "id": 125,
    "category": "housing",
    "title": "Beautifully Renovated AboveGround Basement Apartment 1-bedroom,1-bath",
    "description": "Beautifully Renovated AboveGround Basement Apartment 1-bedroom,1-bath",
    "price": "$1,200",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/north-york-beautifully-renovated/7938018334.html"
  },
  {
    "id": 126,
    "category": "housing",
    "title": "Open Concept Basement Apartment for Rent",
    "description": "Open Concept Basement Apartment for Rent",
    "price": "$1,400",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/toronto-open-concept-basement-apartment/7940157227.html"
  },
  {
    "id": 127,
    "category": "housing",
    "title": "25 MILLER ST. 2ND FL.- 2BED/1BATH, LAUNDRY, YARD",
    "description": "25 MILLER ST. 2ND FL.- 2BED/1BATH, LAUNDRY, YARD",
    "price": "$2,200",
    "location": "Toronto",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/toronto-25-miller-st-2nd-fl-2bed-1bath/7940150710.html"
  },
  {
    "id": 128,
    "category": "housing",
    "title": "Senior and Family Living Apartments",
    "description": "Senior and Family Living Apartments — ajax",
    "price": "$2,199",
    "location": "ajax",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/drh/apa/d/ajax-senior-and-family-living-apartments/7940140862.html"
  },
  {
    "id": 129,
    "category": "housing",
    "title": "Amazing 3+1 Townhome Available In Aurora!",
    "description": "Amazing 3+1 Townhome Available In Aurora! — 145 Millcliff Circ",
    "price": "$3,550",
    "location": "145 Millcliff Circ",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/yrk/apa/d/aurora-amazing-31-townhome-available-in/7940140550.html"
  },
  {
    "id": 130,
    "category": "housing",
    "title": "Keeley Condos, Newer Building, Parking / Locker",
    "description": "Keeley Condos, Newer Building, Parking / Locker — Downsview-Roding-CFB, Toronto,",
    "price": "$2,450",
    "location": "Downsview-Roding-CFB, Toronto,",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/tor/apa/d/toronto-keeley-condos-newer-building/7940132829.html"
  },
  {
    "id": 131,
    "category": "housing",
    "title": "Furnished 1-BR Basement Unit for rent in Mississauga",
    "description": "Furnished 1-BR Basement Unit for rent in Mississauga — mississauga",
    "price": "$1,800",
    "location": "mississauga",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://toronto.craigslist.org/mss/apa/d/mississauga-furnished-br-basement-unit/7940130224.html"
  },
  {
    "id": 132,
    "category": "housing",
    "title": "2BD 2BA, Laundry facilities, Spacious Open-Concept Layouts",
    "description": "2BD 2BA, Laundry facilities, Spacious Open-Concept Layouts — 20159 88 Ave, Langley, BC",
    "price": "$2,095",
    "location": "20159 88 Ave, Langley, BC",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://vancouver.craigslist.org/rds/apa/d/langley-2bd-2ba-laundry-facilities/7939696135.html"
  },
  {
    "id": 133,
    "category": "housing",
    "title": "Modern 2 Bed + 2 Bath Condo for Rent at King George Hub SurreySkyTrain",
    "description": "Modern 2 Bed + 2 Bath Condo for Rent at King George Hub SurreySkyTrain — delta/surrey/langley",
    "price": "$2,195",
    "location": "delta/surrey/langley",
    "languages": [
      "en",
      "zh",
      "vi"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/rds/apa/d/surrey-inner-northwest-modern-bed-bath/7939656677.html"
  },
  {
    "id": 134,
    "category": "housing",
    "title": "Furnished 1 Bedroom Water View 89 Nelson ARC - Available May 1",
    "description": "Furnished 1 Bedroom Water View 89 Nelson ARC - Available May 1 — Downtown Vancouver",
    "price": "$3,000",
    "location": "Downtown Vancouver",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/van/apa/d/vancouver-furnished-bedroom-water-view/7938631980.html"
  },
  {
    "id": 135,
    "category": "housing",
    "title": "One Burrard | 2 Bed, 2 Bath | 17th Floor | Parking Included | $4,200/m",
    "description": "One Burrard | 2 Bed, 2 Bath | 17th Floor | Parking Included | $4,200/m — Downtown Vancouver",
    "price": "$4,200",
    "location": "Downtown Vancouver",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/van/apa/d/vancouver-one-burrard-bed-bath-17th/7940162383.html"
  },
  {
    "id": 136,
    "category": "housing",
    "title": "Downtown Furnished One Bedroom One Bathroom w/ AC",
    "description": "Downtown Furnished One Bedroom One Bathroom w/ AC",
    "price": "$3,000",
    "location": "Vancouver",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://vancouver.craigslist.org/van/apa/d/vancouver-downtown-furnished-one/7940168082.html"
  },
  {
    "id": 137,
    "category": "housing",
    "title": "Sunset Beach Waterfront | 2 BDRM + 2 BATH",
    "description": "Sunset Beach Waterfront | 2 BDRM + 2 BATH",
    "price": "$3,414",
    "location": "Vancouver",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/van/apa/d/vancouver-sunset-beach-waterfront-bdrm/7932820865.html"
  },
  {
    "id": 138,
    "category": "housing",
    "title": "Furnished Basement Suite - Fraser Heights - Available August 1",
    "description": "Furnished Basement Suite - Fraser Heights - Available August 1 — Surrey",
    "price": "$1,400",
    "location": "Surrey",
    "languages": [
      "en",
      "zh",
      "vi"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/rds/apa/d/surrey-northeast-furnished-basement/7940167431.html"
  },
  {
    "id": 139,
    "category": "housing",
    "title": "One Bedroom One Bathroom  near Grouse Mnt",
    "description": "One Bedroom One Bathroom  near Grouse Mnt — North Van",
    "price": "$1,650",
    "location": "North Van",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://vancouver.craigslist.org/nvn/apa/d/north-vancouver-one-bedroom-one/7939137294.html"
  },
  {
    "id": 140,
    "category": "housing",
    "title": "Live Near Starbucks! Renovated in Newcastle!",
    "description": "Live Near Starbucks! Renovated in Newcastle! — 6802 Coal Creek Parkway SE Newcastle, WA 98059",
    "price": "$1,849",
    "location": "6802 Coal Creek Parkway SE Newcastle, WA 98059",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/est/apa/d/renton-live-near-starbucks-renovated-in/7940170745.html"
  },
  {
    "id": 141,
    "category": "housing",
    "title": "TMLP 12-mo. | Access to Large City Park, Vinyl Flooring, Microwave",
    "description": "TMLP 12-mo. | Access to Large City Park, Vinyl Flooring, Microwave — Central District, Little Siam, Leschi",
    "price": "$2,336",
    "location": "Central District, Little Siam, Leschi",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/see/apa/d/seattle-tmlp-12-mo-access-to-large-city/7940170744.html"
  },
  {
    "id": 142,
    "category": "housing",
    "title": "TMLP 14-mo. | Quartz countertops with under mount sinks, Clubroom",
    "description": "TMLP 14-mo. | Quartz countertops with under mount sinks, Clubroom — South Lake Union",
    "price": "$2,045",
    "location": "South Lake Union",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://seattle.craigslist.org/see/apa/d/seattle-tmlp-14-mo-quartz-countertops/7940170736.html"
  },
  {
    "id": 143,
    "category": "housing",
    "title": "Move-In Special, Gilmore Apartments - Affordable Downtown Seattle",
    "description": "Move-In Special, Gilmore Apartments - Affordable Downtown Seattle — Downtown",
    "price": "$1,299",
    "location": "Downtown",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://seattle.craigslist.org/see/apa/d/seattle-move-in-special-gilmore/7940170735.html"
  },
  {
    "id": 144,
    "category": "housing",
    "title": "Microwave*, Patios and Balcones Available*, Close to JBLM, Dishwasher",
    "description": "Microwave*, Patios and Balcones Available*, Close to JBLM, Dishwasher — Fircrest",
    "price": "$0",
    "location": "Fircrest",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://seattle.craigslist.org/tac/apa/d/tacoma-microwave-patios-and-balcones/7940170730.html"
  },
  {
    "id": 145,
    "category": "housing",
    "title": "Location matters! Discover Studio in Lynnwood's core.",
    "description": "Location matters! Discover Studio in Lynnwood's core. — Lynnwood - Thomas Lake Shopping Center",
    "price": "$1,553",
    "location": "Lynnwood - Thomas Lake Shopping Center",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://seattle.craigslist.org/sno/apa/d/lynnwood-location-matters-discover/7940170725.html"
  },
  {
    "id": 146,
    "category": "housing",
    "title": "One Month FREE!! Midtown 15",
    "description": "One Month FREE!! Midtown 15 — Tacoma - The Grand Cinema",
    "price": "$1,499",
    "location": "Tacoma - The Grand Cinema",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://seattle.craigslist.org/tac/apa/d/tacoma-one-month-free-midtown-15/7938752747.html"
  },
  {
    "id": 147,
    "category": "housing",
    "title": "Exceptional living, timeless charm: One Month FREE!",
    "description": "Exceptional living, timeless charm: One Month FREE! — Tacoma - The Broadway Farmers Market",
    "price": "$1,199",
    "location": "Tacoma - The Broadway Farmers Market",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://seattle.craigslist.org/tac/apa/d/tacoma-exceptional-living-timeless/7938753451.html"
  },
  {
    "id": 148,
    "category": "housing",
    "title": "Rogers Park - 2 Bed 1 Bath Heat Included",
    "description": "Rogers Park - 2 Bed 1 Bath Heat Included — Rogers Park at Sherwin & Paulina",
    "price": "$1,895",
    "location": "Rogers Park at Sherwin & Paulina",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/chc/apa/d/chicago-rogers-park-bed-bath-heat/7940169189.html"
  },
  {
    "id": 149,
    "category": "housing",
    "title": "Apartment $1,050 / 1 Bedrooms 1 Bath / Madison & Long",
    "description": "Apartment $1,050 / 1 Bedrooms 1 Bath / Madison & Long — west chicagoland",
    "price": "$1,050",
    "location": "west chicagoland",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://chicago.craigslist.org/wcl/apa/d/chicago-apartment-bedrooms-bath-madison/7940167600.html"
  },
  {
    "id": 150,
    "category": "housing",
    "title": "Apartment $1,250 / 2 Bedrooms 1 Bath / Race & Waller",
    "description": "Apartment $1,250 / 2 Bedrooms 1 Bath / Race & Waller — south chicagoland",
    "price": "$1,250",
    "location": "south chicagoland",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/sox/apa/d/chicago-apartment-bedrooms-bath-race/7940167463.html"
  },
  {
    "id": 151,
    "category": "housing",
    "title": "Apartment $1,400 / 2 Bedrooms 1 Bath / Parkside & North Ave.",
    "description": "Apartment $1,400 / 2 Bedrooms 1 Bath / Parkside & North Ave. — west chicagoland",
    "price": "$1,400",
    "location": "west chicagoland",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/wcl/apa/d/chicago-apartment-bedrooms-bath/7940167264.html"
  },
  {
    "id": 152,
    "category": "housing",
    "title": "Apartment $1,600/ 2 Bedrooms 1 Bath - Parkside & West End",
    "description": "Apartment $1,600/ 2 Bedrooms 1 Bath - Parkside & West End — west chicagoland",
    "price": "$1,600",
    "location": "west chicagoland",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/wcl/apa/d/chicago-apartment-bedrooms-bath/7940167129.html"
  },
  {
    "id": 153,
    "category": "housing",
    "title": "Apartment $1,125 / 2 Bedrooms 1 Bath - Mason & Fillmore",
    "description": "Apartment $1,125 / 2 Bedrooms 1 Bath - Mason & Fillmore — south chicagoland",
    "price": "$1,125",
    "location": "south chicagoland",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/sox/apa/d/oak-park-apartment-bedrooms-bath-mason/7940166757.html"
  },
  {
    "id": 154,
    "category": "housing",
    "title": "Apartment $1,100 / 2 Bedrooms 1 Bath - 78th & Burnham",
    "description": "Apartment $1,100 / 2 Bedrooms 1 Bath - 78th & Burnham — south chicagoland",
    "price": "$1,100",
    "location": "south chicagoland",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://chicago.craigslist.org/sox/apa/d/chicago-apartment-bedrooms-bath-78th/7940163893.html"
  },
  {
    "id": 155,
    "category": "housing",
    "title": "Cute 3 bedroom house near downtown and parks",
    "description": "Cute 3 bedroom house near downtown and parks — Valparaiso",
    "price": "$2,100",
    "location": "Valparaiso",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://chicago.craigslist.org/nwi/apa/d/valparaiso-cute-bedroom-house-near/7940158859.html"
  },
  {
    "id": 156,
    "category": "housing",
    "title": "Open the Door to Possibilities: Experience Living at Its Very Best!",
    "description": "Open the Door to Possibilities: Experience Living at Its Very Best!",
    "price": "$1,409",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://houston.craigslist.org/apa/d/houston-open-the-door-to-possibilities/7938371832.html"
  },
  {
    "id": 157,
    "category": "housing",
    "title": "Laundry facilities, 24-hour emergency maintenance, Intrusion alarms",
    "description": "Laundry facilities, 24-hour emergency maintenance, Intrusion alarms — CONROE",
    "price": "$1,475",
    "location": "CONROE",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://houston.craigslist.org/apa/d/conroe-laundry-facilities-24-hour/7940170092.html"
  },
  {
    "id": 158,
    "category": "housing",
    "title": "Discover your haven. Check out our 1 BR.",
    "description": "Discover your haven. Check out our 1 BR.",
    "price": "$1,300",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/houston-discover-your-haven-check-out/7935789427.html"
  },
  {
    "id": 159,
    "category": "housing",
    "title": "Dog Park, Central Air",
    "description": "Dog Park, Central Air — 1601 Garth Rd, Houston, TX",
    "price": "$1,499",
    "location": "1601 Garth Rd, Houston, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/baytown-dog-park-central-air/7934081268.html"
  },
  {
    "id": 160,
    "category": "housing",
    "title": "No Deposit, No Hassle - Check In Today!",
    "description": "No Deposit, No Hassle - Check In Today! — 5350 W Sam Houston Pkwy N, Houston, TX",
    "price": "$294",
    "location": "5350 W Sam Houston Pkwy N, Houston, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/houston-no-deposit-no-hassle-check-in/7937530186.html"
  },
  {
    "id": 161,
    "category": "housing",
    "title": "Appreciate Value? You'll Get a Deal at La Solera",
    "description": "Appreciate Value? You'll Get a Deal at La Solera",
    "price": "$956",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/houston-appreciate-value-youll-get-deal/7933602633.html"
  },
  {
    "id": 162,
    "category": "housing",
    "title": "Upgrade your lifestyle: Stunning Studio 444 Sq Ft homes.",
    "description": "Upgrade your lifestyle: Stunning Studio 444 Sq Ft homes.",
    "price": "$999",
    "location": "Houston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/houston-upgrade-your-lifestyle-stunning/7938823683.html"
  },
  {
    "id": 163,
    "category": "housing",
    "title": "Exclusive Offer: Short-Term Stays with No Strings Attached!",
    "description": "Exclusive Offer: Short-Term Stays with No Strings Attached! — 18028 US-59, Humble, TX",
    "price": "$251",
    "location": "18028 US-59, Humble, TX",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://houston.craigslist.org/apa/d/humble-exclusive-offer-short-term-stays/7938041071.html"
  },
  {
    "id": 164,
    "category": "housing",
    "title": "Studio with kitchenette, separate entrance and laundry",
    "description": "Studio with kitchenette, separate entrance and laundry — Cambridge",
    "price": "$2,000",
    "location": "Cambridge",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/cambridge-studio-with-kitchenette/7940169465.html"
  },
  {
    "id": 165,
    "category": "housing",
    "title": "new renovation, 8 min walk to T Jamaica plain, available 9/1",
    "description": "new renovation, 8 min walk to T Jamaica plain, available 9/1 — ROSLINDALE/JAMAICA PLAIN",
    "price": "$2,850",
    "location": "ROSLINDALE/JAMAICA PLAIN",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/roslindale-new-renovation-min-walk-to/7940168843.html"
  },
  {
    "id": 166,
    "category": "housing",
    "title": "4 bed 2 full bath newly renovated, 5 min walk to T \"forest hill\" 9/1",
    "description": "4 bed 2 full bath newly renovated, 5 min walk to T \"forest hill\" 9/1 — JAMAICA PLAIN",
    "price": "$4,995",
    "location": "JAMAICA PLAIN",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/roslindale-bed-full-bath-newly/7940168723.html"
  },
  {
    "id": 167,
    "category": "housing",
    "title": "4 Bedroom by owner, Laundry! 12 min walk to Porter Red Line, Avail 9/1",
    "description": "4 Bedroom by owner, Laundry! 12 min walk to Porter Red Line, Avail 9/1 — Porter Sq",
    "price": "$4,950",
    "location": "Porter Sq",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/somerville-bedroom-by-owner-laundry-12/7940161803.html"
  },
  {
    "id": 168,
    "category": "housing",
    "title": "3BR/2.5BA - 1700ft2 - Southie full House w/ 2 level Deck for 9/1",
    "description": "3BR/2.5BA - 1700ft2 - Southie full House w/ 2 level Deck for 9/1 — South Boston",
    "price": "$4,800",
    "location": "South Boston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://boston.craigslist.org/gbs/apa/d/boston-3br-25ba-ft2-southie-full-house/7940154133.html"
  },
  {
    "id": 169,
    "category": "housing",
    "title": "Beautiful 1BD/1BA in West End – River Views, steps to North Station",
    "description": "Beautiful 1BD/1BA in West End – River Views, steps to North Station",
    "price": "$2,950",
    "location": "Boston",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/boston-beautiful-1bd-1ba-in-west-end/7940153853.html"
  },
  {
    "id": 170,
    "category": "housing",
    "title": "Penthouse Suite 3 Beds, 2.5 Baths, Garage, Granite, Marble Staircase,",
    "description": "Penthouse Suite 3 Beds, 2.5 Baths, Garage, Granite, Marble Staircase, — Cambridge \\ Davis Sq. \\ N. Cambridge",
    "price": "$5,400",
    "location": "Cambridge \\ Davis Sq. \\ N. Cambridge",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/cambridge-penthouse-suite-beds-25-baths/7940149096.html"
  },
  {
    "id": 171,
    "category": "housing",
    "title": "1br/1ba (1800/mo) in a 3br/2ba apartment - flexible moving dates DAVIS",
    "description": "1br/1ba (1800/mo) in a 3br/2ba apartment - flexible moving dates DAVIS — Somerville",
    "price": "$1,800",
    "location": "Somerville",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://boston.craigslist.org/gbs/apa/d/somerville-1br-1ba-1800-mo-in-3br-2ba/7940141380.html"
  },
  {
    "id": 172,
    "category": "housing",
    "title": "1/BD, Roller shade window coverings, Spacious 9' ceilings",
    "description": "1/BD, Roller shade window coverings, Spacious 9' ceilings — Boca Raton",
    "price": "$4,132",
    "location": "Boca Raton",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/pbc/apa/d/boca-raton-bd-roller-shade-window/7937480989.html"
  },
  {
    "id": 173,
    "category": "housing",
    "title": "Stylish Interiors & Inviting Courtyards 🌿 Your Next Home Is Here",
    "description": "Stylish Interiors & Inviting Courtyards 🌿 Your Next Home Is Here — 9873 Lawrence Road, Boynton Beach, FL",
    "price": "$2,262",
    "location": "9873 Lawrence Road, Boynton Beach, FL",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/pbc/apa/d/boynton-beach-stylish-interiors/7931414062.html"
  },
  {
    "id": 174,
    "category": "housing",
    "title": "REMODELED 1/1 WITH PARKING ( ONLY FIRST MONTH AND 1 MONTH DEPOSIT )",
    "description": "REMODELED 1/1 WITH PARKING ( ONLY FIRST MONTH AND 1 MONTH DEPOSIT ) — NORMANDY ISLES / MIAMI BEACH",
    "price": "$1,900",
    "location": "NORMANDY ISLES / MIAMI BEACH",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://miami.craigslist.org/mdc/apa/d/miami-beach-remodeled-1-with-parking/7935363506.html"
  },
  {
    "id": 175,
    "category": "housing",
    "title": "GORGEOUS 2/1.5 WITH W/D, PARKING, JACUZZI, GYM.. ( ONLY $750 DEPOSIT )",
    "description": "GORGEOUS 2/1.5 WITH W/D, PARKING, JACUZZI, GYM.. ( ONLY $750 DEPOSIT ) — LITTLE HAVANNA / DOWTOWWN",
    "price": "$2,500",
    "location": "LITTLE HAVANNA / DOWTOWWN",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/mdc/apa/d/miami-gorgeous-15-with-d-parking/7935505260.html"
  },
  {
    "id": 176,
    "category": "housing",
    "title": "GORGEOUS 1/1 WITH W/D , PARKING, POOL, GYM.. ( ONLY $1000 DEPOSIT )",
    "description": "GORGEOUS 1/1 WITH W/D , PARKING, POOL, GYM.. ( ONLY $1000 DEPOSIT ) — DORAL",
    "price": "$2,300",
    "location": "DORAL",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/mdc/apa/d/gorgeous-1-with-d-parking-pool-gym-only/7935352079.html"
  },
  {
    "id": 177,
    "category": "housing",
    "title": "LUXURY STUDIO WITH W/D, POOL, GYM, PARKING, ETC...( ONY 1000 DEPOSIT )",
    "description": "LUXURY STUDIO WITH W/D, POOL, GYM, PARKING, ETC...( ONY 1000 DEPOSIT ) — MIDTOWN / EDGEWATER",
    "price": "$2,500",
    "location": "MIDTOWN / EDGEWATER",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://miami.craigslist.org/mdc/apa/d/miami-luxury-studio-with-d-pool-gym/7935399798.html"
  },
  {
    "id": 178,
    "category": "housing",
    "title": "GORGEOUS 1/1 ALL MODERN WITH W/D, PARKING, POOL, GYM..ONLY 750 DEPOSIT",
    "description": "GORGEOUS 1/1 ALL MODERN WITH W/D, PARKING, POOL, GYM..ONLY 750 DEPOSIT — COCONUT GROVE",
    "price": "$2,650",
    "location": "COCONUT GROVE",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/mdc/apa/d/gorgeous-1-all-modern-with-d-parking/7935505137.html"
  },
  {
    "id": 179,
    "category": "housing",
    "title": "LUXURY 2/2 WITH W/D, PARKING, POOL, GYM, ETC.. ( ONLY $500 DEPOSIT )",
    "description": "LUXURY 2/2 WITH W/D, PARKING, POOL, GYM, ETC.. ( ONLY $500 DEPOSIT ) — WYNWOOD",
    "price": "$3,450",
    "location": "WYNWOOD",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://miami.craigslist.org/mdc/apa/d/miami-luxury-2-with-d-parking-pool-gym/7935178970.html"
  },
  {
    "id": 180,
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
    "featured": false,
    "link": "https://newyork.craigslist.org/fct/lbs/d/southport-dump-runs-moving-help/7940167929.html"
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
    "link": "https://newyork.craigslist.org/que/lbs/d/jamaica-garbage-removal-demo-tree/7940162386.html"
  },
  {
    "id": 182,
    "category": "services",
    "title": "2-3 STRONG LABORERS AVAILABLE! MOVING HELP!  ONLY $35 P.H PER MAN!",
    "description": "2-3 STRONG LABORERS AVAILABLE! MOVING HELP!  ONLY $35 P.H PER MAN! — SERVICING THE ENTIRE N.Y.C LOADING/UNLOADING. APT SWAPS ETC!",
    "price": "$0",
    "location": "SERVICING THE ENTIRE N.Y.C LOADING/UNLOADING. APT SWAPS ETC!",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/mnh/lbs/d/new-york-3-strong-laborers-available/7940150959.html"
  },
  {
    "id": 183,
    "category": "services",
    "title": "$99 24/7 QUEENS  JUNK REMOVAL  COMMERCIAL, HOME OFFICE TRASH REMOVAL",
    "description": "$99 24/7 QUEENS  JUNK REMOVAL  COMMERCIAL, HOME OFFICE TRASH REMOVAL — ALL N.Y.C $99 (24/7) 347-228-0532 CHEAP SAME-DAY REMOVAL",
    "price": "$0",
    "location": "ALL N.Y.C $99 (24/7) 347-228-0532 CHEAP SAME-DAY REMOVAL",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/que/lbs/d/astoria-queens-junk-removal-commercial/7940150651.html"
  },
  {
    "id": 184,
    "category": "services",
    "title": "Insured moving services  ● Man with a Van ● Last minute calls",
    "description": "Insured moving services  ● Man with a Van ● Last minute calls — West Village",
    "price": "$0",
    "location": "West Village",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/mnh/lbs/d/new-york-insured-moving-services-man/7940150533.html"
  },
  {
    "id": 185,
    "category": "services",
    "title": "DEMO/GARBAGE/JUNK & TREE REMOVAL”631 707-4313”",
    "description": "DEMO/GARBAGE/JUNK & TREE REMOVAL”631 707-4313” — ALL OF QUEENS",
    "price": "$0",
    "location": "ALL OF QUEENS",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/que/lbs/d/queens-village-demo-garbage-junk-tree/7940142676.html"
  },
  {
    "id": 186,
    "category": "services",
    "title": "!!!!LOCAL JOBS.WEEKLY TRIPS TO FL, GA. GREAT RATES!!!!!!!!!!!!!",
    "description": "!!!!LOCAL JOBS.WEEKLY TRIPS TO FL, GA. GREAT RATES!!!!!!!!!!!!! — westchester",
    "price": "$0",
    "location": "westchester",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/wch/lbs/d/local-jobsweekly-trips-to-fl-ga-great/7940142207.html"
  },
  {
    "id": 187,
    "category": "services",
    "title": "Furniture Delivery🍀 Moving Services💯Last Minute",
    "description": "Furniture Delivery🍀 Moving Services💯Last Minute — Brooklyn Heights",
    "price": "$0",
    "location": "Brooklyn Heights",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/brk/lbs/d/brooklyn-furniture-delivery-moving/7940136286.html"
  },
  {
    "id": 188,
    "category": "services",
    "title": "PROFESSIONAL E5 MOVING SERVICE / MOVERS",
    "description": "PROFESSIONAL E5 MOVING SERVICE / MOVERS — Long Beach",
    "price": "$0",
    "location": "Long Beach",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lgb/lbs/d/long-beach-professional-e5-moving/7940166011.html"
  },
  {
    "id": 189,
    "category": "services",
    "title": "Expert Tree Trimming & Shaping • Ornamental Pruning • Free Estimates",
    "description": "Expert Tree Trimming & Shaping • Ornamental Pruning • Free Estimates — Cerritos",
    "price": "$0",
    "location": "Cerritos",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lgb/lbs/d/cerritos-expert-tree-trimming-shaping/7940165884.html"
  },
  {
    "id": 190,
    "category": "services",
    "title": "MOVERS - JUNK REMOVAL HAULING - DEMOLITION DEMO - LOCAL MOVING MOVER",
    "description": "MOVERS - JUNK REMOVAL HAULING - DEMOLITION DEMO - LOCAL MOVING MOVER — LOWEST PRICES - $90hr 2 MEN & TRUCK - WE BUY & SELL HOUSES",
    "price": "$0",
    "location": "LOWEST PRICES - $90hr 2 MEN & TRUCK - WE BUY & SELL HOUSES",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/lbs/d/san-pedro-movers-junk-removal-hauling/7940164065.html"
  },
  {
    "id": 191,
    "category": "services",
    "title": "PROFESSIONAL E5 MOVING SERVICE / MOVERS (Local & Long Distance Full Mo",
    "description": "PROFESSIONAL E5 MOVING SERVICE / MOVERS (Local & Long Distance Full Mo — Van Nuys",
    "price": "$0",
    "location": "Van Nuys",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/sfv/lbs/d/van-nuys-professional-e5-moving-service/7940163427.html"
  },
  {
    "id": 192,
    "category": "services",
    "title": "Lrg pickup equipped & reliable,on call..SM,Wla,BH, all LA",
    "description": "Lrg pickup equipped & reliable,on call..SM,Wla,BH, all LA — Los angeles",
    "price": "$0",
    "location": "Los angeles",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/wst/lbs/d/venice-lrg-pickup-equipped-reliableon/7940163211.html"
  },
  {
    "id": 193,
    "category": "services",
    "title": "🔥 🔥450 Full load $250  half load  🔥  Levi’s junk removal LLC",
    "description": "🔥 🔥450 Full load $250  half load  🔥  Levi’s junk removal LLC — San Fernando valley and Los Angeles and Thousand Oaks",
    "price": "$0",
    "location": "San Fernando valley and Los Angeles and Thousand Oaks",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/lbs/d/tarzana-450-full-load-250-half-load/7940162625.html"
  },
  {
    "id": 194,
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
    "link": "https://losangeles.craigslist.org/sfv/lbs/d/san-fernando-two-movers-and-truck-fast/7940161690.html"
  },
  {
    "id": 195,
    "category": "services",
    "title": "SAME DAY / JUNK REMOVAL / JUNK HAULING / TRASH HAULING / TRASH PICK UP",
    "description": "SAME DAY / JUNK REMOVAL / JUNK HAULING / TRASH HAULING / TRASH PICK UP — Text or Call Will Respond in 10 Second!",
    "price": "$0",
    "location": "Text or Call Will Respond in 10 Second!",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/sgv/lbs/d/temple-city-same-day-junk-removal-junk/7940161198.html"
  },
  {
    "id": 196,
    "category": "services",
    "title": "Moving Service. $89/HOUR—2 MOVERS MOVER🌎☎️☎️☎️🌎SAME DAY MOVE",
    "description": "Moving Service. $89/HOUR—2 MOVERS MOVER🌎☎️☎️☎️🌎SAME DAY MOVE — santa clara",
    "price": "$0",
    "location": "santa clara",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sby/lbs/d/santa-clara-moving-service-89-hour2/7940168417.html"
  },
  {
    "id": 197,
    "category": "services",
    "title": "☎️☎️  San Francisco Moving Services",
    "description": "☎️☎️  San Francisco Moving Services — San Francisco, San Jose, Sacramento, Santa Rosa, Santa Cruz",
    "price": "$0",
    "location": "San Francisco, San Jose, Sacramento, Santa Rosa, Santa Cruz",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sfc/lbs/d/san-francisco-san-francisco-moving/7940167711.html"
  },
  {
    "id": 198,
    "category": "services",
    "title": "🚛SOUTH BAY MOVERS🚨LAST MINUTE MOVER》HOME-OFFICE-PIANO-DELIVERY-LABOR",
    "description": "🚛SOUTH BAY MOVERS🚨LAST MINUTE MOVER》HOME-OFFICE-PIANO-DELIVERY-LABOR — ✅️San Jose-Cupertino-Sunnyvale-Milpitas-Campbell✅️ALL AREA",
    "price": "$0",
    "location": "✅️San Jose-Cupertino-Sunnyvale-Milpitas-Campbell✅️ALL AREA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/sby/lbs/d/campbell-south-bay-moverslast-minute/7940165293.html"
  },
  {
    "id": 199,
    "category": "services",
    "title": "🏃🏃🏃HOMES / OFFICE / APTS / Licensed & Insured Movers",
    "description": "🏃🏃🏃HOMES / OFFICE / APTS / Licensed & Insured Movers — Local & Long-distance move",
    "price": "$0",
    "location": "Local & Long-distance move",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/lbs/d/union-city-homes-office-apts-licensed/7940161547.html"
  },
  {
    "id": 200,
    "category": "services",
    "title": "⭐️🚚ARTURO’S MOVING⭐️🚚LOCAL & LONG⭐️🚚DISTANCE SERVICE⭐",
    "description": "⭐️🚚ARTURO’S MOVING⭐️🚚LOCAL & LONG⭐️🚚DISTANCE SERVICE⭐ — sunnyvale",
    "price": "$0",
    "location": "sunnyvale",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sby/lbs/d/sunnyvale-arturos-movinglocal/7940161173.html"
  },
  {
    "id": 201,
    "category": "services",
    "title": "♻️♻️♻️AA Junk Removal & Hauling 24/7 BEST PRICES  !!*$$SAME DAY",
    "description": "♻️♻️♻️AA Junk Removal & Hauling 24/7 BEST PRICES  !!*$$SAME DAY — Novato",
    "price": "$0",
    "location": "Novato",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/nby/lbs/d/novato-aa-junk-removal-hauling-24-best/7940158901.html"
  },
  {
    "id": 202,
    "category": "services",
    "title": "♻️♻️♻️AA Junk Removal & Hauling 24/7 BEST PRICES !!!***same day",
    "description": "♻️♻️♻️AA Junk Removal & Hauling 24/7 BEST PRICES !!!***same day — Sonoma",
    "price": "$0",
    "location": "Sonoma",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/nby/lbs/d/sonoma-aa-junk-removal-hauling-24-best/7940158856.html"
  },
  {
    "id": 203,
    "category": "services",
    "title": "♻️♻️♻️AA Junk removal & hauling 24/7BEST PRICES  !!*$$SAME DAY",
    "description": "♻️♻️♻️AA Junk removal & hauling 24/7BEST PRICES  !!*$$SAME DAY — Petaluma",
    "price": "$0",
    "location": "Petaluma",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/nby/lbs/d/petaluma-aa-junk-removal-hauling-24/7940158775.html"
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
    "featured": true,
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
    "featured": true,
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
    "featured": false,
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
    "featured": false,
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
    "featured": true,
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
    "featured": true,
    "link": "https://toronto.craigslist.org/tor/lbs/d/toronto-movers-save-with-man-with-big/7938934144.html"
  },
  {
    "id": 212,
    "category": "items",
    "title": "TITLEIST PRO-Vs-LIKE NEW",
    "description": "TITLEIST PRO-Vs-LIKE NEW — fairfield co, CT",
    "price": "$1",
    "location": "fairfield co, CT",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/fct/for/d/milford-titleist-pro-vs-like-new/7930685360.html"
  },
  {
    "id": 213,
    "category": "items",
    "title": "Construction harness",
    "description": "Construction harness — westchester",
    "price": "$40",
    "location": "westchester",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/wch/tls/d/yonkers-construction-harness/7940170746.html"
  },
  {
    "id": 214,
    "category": "items",
    "title": "HARLEY “GEARS EDITION” LIGHTER",
    "description": "HARLEY “GEARS EDITION” LIGHTER — Milford",
    "price": "$65",
    "location": "Milford",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/fct/for/d/milford-harley-gears-edition-lighter/7929371989.html"
  },
  {
    "id": 215,
    "category": "items",
    "title": "Greenworks battery-powered edger (tool only)",
    "description": "Greenworks battery-powered edger (tool only) — Cortlandt Manor",
    "price": "$50",
    "location": "Cortlandt Manor",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/wch/tls/d/croton-on-hudson-greenworks-battery/7937117657.html"
  },
  {
    "id": 216,
    "category": "items",
    "title": "Beautiful British shorthair cat",
    "description": "Beautiful British shorthair cat — Brooklyn",
    "price": "$800",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/brk/for/d/brooklyn-beautiful-british-shorthair-cat/7933943953.html"
  },
  {
    "id": 217,
    "category": "items",
    "title": "PS4 games",
    "description": "PS4 games — westchester",
    "price": "$30",
    "location": "westchester",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/wch/vgm/d/yonkers-ps4-games/7939653351.html"
  },
  {
    "id": 218,
    "category": "items",
    "title": "Guitar accessories",
    "description": "Guitar accessories — westchester",
    "price": "$25",
    "location": "westchester",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/wch/msg/d/yonkers-guitar-accessories/7933253917.html"
  },
  {
    "id": 219,
    "category": "items",
    "title": "2019 Dodge pro master 2500",
    "description": "2019 Dodge pro master 2500 — staten island",
    "price": "$26,000",
    "location": "staten island",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/stn/cto/d/staten-island-2019-dodge-pro-master-2500/7940171246.html"
  },
  {
    "id": 220,
    "category": "items",
    "title": "Wine Corks more than 3,000 enough for your infiniti design",
    "description": "Wine Corks more than 3,000 enough for your infiniti design — WEST COVINA",
    "price": "$1",
    "location": "WEST COVINA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/sgv/for/d/wine-corks-more-than-3000-enough-for/7937712991.html"
  },
  {
    "id": 221,
    "category": "items",
    "title": "2003 SUZUKI BANDIT 1200",
    "description": "2003 SUZUKI BANDIT 1200 — Los angeles Canoga Park",
    "price": "$1,800",
    "location": "Los angeles Canoga Park",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/sfv/mpo/d/winnetka-2003-suzuki-bandit-1200/7908222495.html"
  },
  {
    "id": 222,
    "category": "items",
    "title": "Vintage cartoon/character Gift bag",
    "description": "Vintage cartoon/character Gift bag — west covina",
    "price": "$2",
    "location": "west covina",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sgv/for/d/vintage-cartoon-character-gift-bag/7937713158.html"
  },
  {
    "id": 223,
    "category": "items",
    "title": "Finding Nemo (DVD) (2-Disc Collector's Edition)Mandarin/Cantonese",
    "description": "Finding Nemo (DVD) (2-Disc Collector's Edition)Mandarin/Cantonese — san gabriel valley",
    "price": "$10",
    "location": "san gabriel valley",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sgv/emd/d/west-covina-finding-nemo-dvd-disc/7937713067.html"
  },
  {
    "id": 224,
    "category": "items",
    "title": "2 Fish (Clear) by CRISTAL D'ARQUES-DURAND",
    "description": "2 Fish (Clear) by CRISTAL D'ARQUES-DURAND — san gabriel valley",
    "price": "$20",
    "location": "san gabriel valley",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/sgv/hsh/d/west-covina-fish-clear-by-cristal/7936522875.html"
  },
  {
    "id": 225,
    "category": "items",
    "title": "Like NEW ! Pier-1  contemporary 11” Plates-set of 2",
    "description": "Like NEW ! Pier-1  contemporary 11” Plates-set of 2 — west covina",
    "price": "$8",
    "location": "west covina",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sgv/hsh/d/west-covina-like-new-pier-contemporary/7936522826.html"
  },
  {
    "id": 226,
    "category": "items",
    "title": "Complete Set of 4 vintage Campbell’s kids 3D Shadow Box Framed Art",
    "description": "Complete Set of 4 vintage Campbell’s kids 3D Shadow Box Framed Art — WEST COVINA",
    "price": "$500",
    "location": "WEST COVINA",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sgv/art/d/complete-set-of-vintage-campbells-kids/7936522693.html"
  },
  {
    "id": 227,
    "category": "items",
    "title": "LIKE NEW ! Short sleeves TEES",
    "description": "LIKE NEW ! Short sleeves TEES — west covina",
    "price": "$3",
    "location": "west covina",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sgv/clo/d/west-covina-like-new-short-sleeves-tees/7936522747.html"
  },
  {
    "id": 228,
    "category": "items",
    "title": "2 seat loveseat futon",
    "description": "2 seat loveseat futon — san rafael",
    "price": "$0",
    "location": "san rafael",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://sfbay.craigslist.org/nby/zip/d/kentfield-seat-loveseat-futon/7937952993.html"
  },
  {
    "id": 229,
    "category": "items",
    "title": "Grey Cabinet (s) with Sliding Doors (2 Cabinets Available) OBO",
    "description": "Grey Cabinet (s) with Sliding Doors (2 Cabinets Available) OBO — san rafael",
    "price": "$300",
    "location": "san rafael",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/nby/fuo/d/kentfield-grey-cabinet-with-sliding/7937112715.html"
  },
  {
    "id": 230,
    "category": "items",
    "title": "5 drawer dresser",
    "description": "5 drawer dresser — san rafael",
    "price": "$0",
    "location": "san rafael",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/nby/zip/d/kentfield-drawer-dresser/7937768062.html"
  },
  {
    "id": 231,
    "category": "items",
    "title": "Car Dash Camera with Wide angle Dash (NEW)",
    "description": "Car Dash Camera with Wide angle Dash (NEW) — san leandro",
    "price": "$40",
    "location": "san leandro",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/eby/ele/d/san-leandro-car-dash-camera-with-wide/7940170801.html"
  },
  {
    "id": 232,
    "category": "items",
    "title": "HERMAN MILLER AERON REMASTERED SIZE C - WITH ATLAS HEADREST",
    "description": "HERMAN MILLER AERON REMASTERED SIZE C - WITH ATLAS HEADREST — San Jose",
    "price": "$1,100",
    "location": "San Jose",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sby/fuo/d/san-jose-herman-miller-aeron-remastered/7940170789.html"
  },
  {
    "id": 233,
    "category": "items",
    "title": "LiveWire Solutions ABY Switch pedal",
    "description": "LiveWire Solutions ABY Switch pedal — ingleside / SFSU / CCSF",
    "price": "$35",
    "location": "ingleside / SFSU / CCSF",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sfc/msg/d/san-francisco-livewire-solutions-aby/7933847075.html"
  },
  {
    "id": 234,
    "category": "items",
    "title": "4 illy Red Logo Coffee Cups O Handle IPA Italy Cafe Cups",
    "description": "4 illy Red Logo Coffee Cups O Handle IPA Italy Cafe Cups — Sunset",
    "price": "$35",
    "location": "Sunset",
    "languages": [
      "en",
      "zh"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sfc/hsh/d/san-francisco-illy-red-logo-coffee-cups/7938711522.html"
  },
  {
    "id": 235,
    "category": "items",
    "title": "TC Electronic Ditto",
    "description": "TC Electronic Ditto — ingleside / SFSU / CCSF",
    "price": "$70",
    "location": "ingleside / SFSU / CCSF",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://sfbay.craigslist.org/sfc/msg/d/san-francisco-tc-electronic-ditto/7933842884.html"
  },
  {
    "id": 236,
    "category": "vehicles",
    "title": "2019 Dodge pro master 2500",
    "description": "2019 Dodge pro master 2500 — staten island",
    "price": "$26,000",
    "location": "staten island",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/stn/cto/d/staten-island-2019-dodge-pro-master-2500/7940171246.html"
  },
  {
    "id": 237,
    "category": "vehicles",
    "title": "2007 Toyota Camry XLE Sedan - 187,000 Miles - Fully Loaded",
    "description": "2007 Toyota Camry XLE Sedan - 187,000 Miles - Fully Loaded — QUEENS",
    "price": "$3,200",
    "location": "QUEENS",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/que/cto/d/south-ozone-park-2007-toyota-camry-xle/7940170914.html"
  },
  {
    "id": 238,
    "category": "vehicles",
    "title": "2024 Audi A6 quattro Premium Plus 45 TFSI AWD 4dr Sedan Call/Text 516- 614-5359",
    "description": "2024 Audi A6 quattro Premium Plus 45 TFSI AWD 4dr Sedan Call/Text 516- 614-5359 — + EVERYONE FINANCED!!  PODEMOS FINANCIAR A CUALQUIERA!",
    "price": "$26,595",
    "location": "+ EVERYONE FINANCED!!  PODEMOS FINANCIAR A CUALQUIERA!",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/ctd/d/bethpage-2024-audi-a6-quattro-premium/7940163785.html"
  },
  {
    "id": 239,
    "category": "vehicles",
    "title": "2012 Honda CR-V EX-L (Leather/Loaded) -182k Highway Miles - Runs Perf",
    "description": "2012 Honda CR-V EX-L (Leather/Loaded) -182k Highway Miles - Runs Perf — Brooklyn",
    "price": "$6,800",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://newyork.craigslist.org/brk/cto/d/brooklyn-2012-honda-cr-ex-leather/7940163444.html"
  },
  {
    "id": 240,
    "category": "vehicles",
    "title": "2016 scion frs 6 speed manual transmission low miles !!!",
    "description": "2016 scion frs 6 speed manual transmission low miles !!! — queens",
    "price": "$10,900",
    "location": "queens",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/que/cto/d/rego-park-2016-scion-frs-speed-manual/7940160439.html"
  },
  {
    "id": 241,
    "category": "vehicles",
    "title": "Audi A6 Premium Sport",
    "description": "Audi A6 Premium Sport — Brooklyn",
    "price": "$8,600",
    "location": "Brooklyn",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/ctd/d/brooklyn-audi-a6-premium-sport/7940156318.html"
  },
  {
    "id": 242,
    "category": "vehicles",
    "title": "2004 jeep wrangler unlimited 135k great shape",
    "description": "2004 jeep wrangler unlimited 135k great shape — Midwood",
    "price": "$5,400",
    "location": "Midwood",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/cto/d/brooklyn-2004-jeep-wrangler-unlimited/7940148465.html"
  },
  {
    "id": 243,
    "category": "vehicles",
    "title": "2024 Audi Q5 quattro S line Prem Plus 45 TFSI AWD Premium 4dr S Call/Text 516- 6",
    "description": "2024 Audi Q5 quattro S line Prem Plus 45 TFSI AWD Premium 4dr S Call/Text 516- 6 — + EVERYONE FINANCED!!  PODEMOS FINANCIAR A CUALQUIERA!",
    "price": "$25,995",
    "location": "+ EVERYONE FINANCED!!  PODEMOS FINANCIAR A CUALQUIERA!",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://newyork.craigslist.org/brk/ctd/d/bethpage-2024-audi-q5-quattro-line-prem/7940145612.html"
  },
  {
    "id": 244,
    "category": "vehicles",
    "title": "◼️ 2009 Honda Civic LX Sedan – Only 60,000 Original Miles Clean Title",
    "description": "◼️ 2009 Honda Civic LX Sedan – Only 60,000 Original Miles Clean Title — La mirada",
    "price": "$3,000",
    "location": "La mirada",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lgb/cto/d/la-mirada-honda-civic-lx-sedan-only/7940171451.html"
  },
  {
    "id": 245,
    "category": "vehicles",
    "title": "2014 Mercedes E 350 . Good condition",
    "description": "2014 Mercedes E 350 . Good condition",
    "price": "$9,500",
    "location": "Los Angeles",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lac/cto/d/los-angeles-2014-mercedes-350-good/7940170852.html"
  },
  {
    "id": 246,
    "category": "vehicles",
    "title": "2019 Ford F350 Utility 6.2L Gas,8ft Knapheide bed, very clean truck!",
    "description": "2019 Ford F350 Utility 6.2L Gas,8ft Knapheide bed, very clean truck! — central LA 213/323",
    "price": "$24,995",
    "location": "central LA 213/323",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/lac/ctd/d/garden-grove-2019-ford-f350-utility-62l/7940170738.html"
  },
  {
    "id": 247,
    "category": "vehicles",
    "title": "Audi 2006 Avant Sport Quattro 6",
    "description": "Audi 2006 Avant Sport Quattro 6 — westside-southbay-310",
    "price": "$5,500",
    "location": "westside-southbay-310",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/wst/cto/d/venice-audi-2006-avant-sport-quattro/7940170515.html"
  },
  {
    "id": 248,
    "category": "vehicles",
    "title": "2003 Volvo S60 Compact Family Sedan 115,000 ORG OWNR Runs EXCLNT 35MPG",
    "description": "2003 Volvo S60 Compact Family Sedan 115,000 ORG OWNR Runs EXCLNT 35MPG — Los Angeles/Hollywood",
    "price": "$3,000",
    "location": "Los Angeles/Hollywood",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/lac/cto/d/los-angeles-2003-volvo-s60-compact/7940158312.html"
  },
  {
    "id": 249,
    "category": "vehicles",
    "title": "2012 acura rdx turbo",
    "description": "2012 acura rdx turbo — north hollywood",
    "price": "$2,750",
    "location": "north hollywood",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/sfv/cto/d/north-hollywood-2012-acura-rdx-turbo/7940170262.html"
  },
  {
    "id": 250,
    "category": "vehicles",
    "title": "2019 Ford F350 Utility 6.2L Gas,9ft Harbor bed,1600lb Pwr lift gate!",
    "description": "2019 Ford F350 Utility 6.2L Gas,9ft Harbor bed,1600lb Pwr lift gate! — central LA 213/323",
    "price": "$26,995",
    "location": "central LA 213/323",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": true,
    "link": "https://losangeles.craigslist.org/lac/ctd/d/garden-grove-2019-ford-f350-utility-62l/7940169754.html"
  },
  {
    "id": 251,
    "category": "vehicles",
    "title": "2019 Chevrolet 2500 Utility 6.0L Gas,4 new tires,ladder rack!",
    "description": "2019 Chevrolet 2500 Utility 6.0L Gas,4 new tires,ladder rack! — central LA 213/323",
    "price": "$30,999",
    "location": "central LA 213/323",
    "languages": [
      "en"
    ],
    "contact": "View Original Listing",
    "posted": "2026-06-11",
    "featured": false,
    "link": "https://losangeles.craigslist.org/lac/ctd/d/garden-grove-2019-chevrolet-2500/7940168589.html"
  }
];
