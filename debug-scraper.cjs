const https = require('https');
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
    console.log('HTML length:', data.length);
    console.log('Has cl-search-result:', data.includes('cl-search-result'));
    console.log('Has posting-title:', data.includes('posting-title'));
    console.log('Has priceinfo:', data.includes('priceinfo'));
    // Print relevant section
    const idx = data.indexOf('search-result');
    if (idx > -1) {
      console.log('\n=== Around search-result ===');
      console.log(data.slice(Math.max(0, idx - 200), idx + 500));
    }
    // Look for result-like patterns
    const resultClassMatches = data.match(/class="[^"]*result[^"]*"/g);
    console.log('Result class matches:', resultClassMatches ? resultClassMatches.slice(0, 5) : 'none');
    // Print first 3000 chars
    console.log('\n=== First 3000 chars ===');
    console.log(data.slice(0, 3000));
  });
}).on('error', e => console.error('Error:', e.message));