const fs = require('fs');
const path = require('path');

let content = fs.readFileSync(path.join(__dirname, 'settings.json'));

module.exports = JSON.parse(content);
