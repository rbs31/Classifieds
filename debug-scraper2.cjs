const https = require('https');
const fs = require('fs');

https.get('https://newyork.craigslist.org/search/apa', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'text/html',
  },
  timeout: 15000,
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Extract JSON-LD data
    const ldMatch = data.match(/<script type="application\/ld\+json" id="ld_searchpage_results"[^>]*>([\s\S]*?)<\/script>/);
    if (ldMatch) {
      const ldData = JSON.parse(ldMatch[1]);
      console.log('JSON-LD items:', ldData.itemListElement.length);
      console.log('\nFirst 3 items:');
      for (let i = 0; i < 3; i++) {
        const item = ldData.itemListElement[i].item;
        console.log(`  ${i+1}: ${item.name} | bedrooms: ${item.numberOfBedrooms || 'N/A'} | loc: ${item.address?.addressLocality || 'N/A'}`);
      }
    }

    // Also check static search results
    const staticMatch = data.match(/class="cl-static-search-result"/g);
    console.log('\nStatic result blocks:', staticMatch ? staticMatch.length : 0);

    // Try to parse a static block
    const staticBlockRegex = /<li[^>]*class="cl-static-search-result[^"]*"[^>]*>([\s\S]*?)<\/li>/g;
    const blocks = data.match(staticBlockRegex) || [];
    console.log('Static blocks matched:', blocks.length);
    if (blocks.length > 0) {
      console.log('\nFirst block (truncated):');
      console.log(blocks[0].slice(0, 500));
    }
  });
}).on('error', e => console.error('Error:', e.message));