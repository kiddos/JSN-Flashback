const fs = require('fs');
const path = require('path');

const defaultSetting = {
  path: '\\\\nas',
};

fs.writeFile('settings.json', JSON.stringify(defaultSetting, null, 4));
