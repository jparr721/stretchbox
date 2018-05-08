const fs = require('fs');
const generateConfig = require('../bin/generate-config');


const configDir = `${__dirname}/../config`;
const checkConfig = () => {
  if (!fs.existsSync(configDir)) {
    console.log('Config directory not found, generating...');
    generateConfig();
  }
  console.log('Config found!');
};

module.exports = checkConfig;
