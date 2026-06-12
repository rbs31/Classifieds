const fs = require('fs');
const path = 'C:\\Users\\arthu\\.qclaw\\workspace\\Classifieds\\src\\data.js';

let data = fs.readFileSync(path, 'utf8');

const jobListings = `,
  // === 招聘信息 (Jobs) ===
  {
    "id": 200,
    "category": "jobs",
    "title": "Software Engineer - Full Stack (H1B支持)",
    "description": "Growing tech company in SF seeking full-stack developer. H1B transfer OK. 中文职场友好。",
    "price": "$120K-$180K",
    "location": "San Francisco",
    "languages": ["en", "zh"],
    "contact": "View Original Listing ↗",
    "link": "https://sfbay.craigslist.org/search/jjj"
  },
  {
    "id": 201,
    "category": "jobs",
    "title": "会计助理 / Accounting Assistant",
    "description": "华人会计事务所招聘助理，会中文优先，有CPA备考支持。",
    "price": "$50K-$65K",
    "location": "New York",
    "languages": ["en", "zh"],
    "contact": "View Original Listing ↗",
    "link": "https://newyork.craigslist.org/search/jjj"
  },
  {
    "id": 202,
    "category": "jobs",
    "title": "Restaurant Server / 餐厅服务员",
    "description": "Full-time server position in Chinatown. 提供培训，小费好。中文沟通即可。",
    "price": "$18/hr + tips",
    "location": "Los Angeles",
    "languages": ["zh", "en"],
    "contact": "View Original Listing ↗",
    "link": "https://losangeles.craigslist.org/search/jjj"
  },
  {
    "id": 203,
    "category": "jobs",
    "title": "Delivery Driver / 外卖司机",
    "description": "Flexible hours, own vehicle preferred. 多劳多得，周结工资。",
    "price": "$20-$35/hr",
    "location": "Toronto",
    "languages": ["zh", "en"],
    "contact": "View Original Listing ↗",
    "link": "https://toronto.craigslist.org/search/jjj"
  },
  {
    "id": 204,
    "category": "jobs",
    "title": "Data Analyst (Entry Level)",
    "description": "Recent grads welcome! Python/SQL required. 公司有多名华人工程师，文化包容。",
    "price": "$90K-$120K",
    "location": "Seattle",
    "languages": ["en"],
    "contact": "View Original Listing ↗",
    "link": "https://seattle.craigslist.org/search/jjj"
  },
  {
    "id": 205,
    "category": "jobs",
    "title": "家政保洁 / House Cleaner",
    "description": "Part-time house cleaning. 经验不限，提供培训。可合法打工者优先。",
    "price": "$25/hr",
    "location": "Vancouver",
    "languages": ["zh"],
    "contact": "View Original Listing ↗",
    "link": "https://vancouver.craigslist.org/search/jjj"
  }
`;

// 在最后的 ]}; 前插入
const newData = data.replace('}\n];', '}' + jobListings + '\n];');
fs.writeFileSync(path, newData, 'utf8');
console.log('✅ 已添加 6 条招聘信息到 data.js');
