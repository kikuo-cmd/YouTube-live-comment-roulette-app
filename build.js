const fs = require('fs');
const apiKey = process.env.YOUTUBE_API_KEY || '';

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('__API_KEY_PLACEHOLDER__', apiKey);
fs.writeFileSync('index.html', html);
console.log('API Key injected successfully!');
