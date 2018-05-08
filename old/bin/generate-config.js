const fs = require('fs');


const configDir = `${__dirname}/../config`;
const configFile = `${__dirname}/../config/config.json`;

const generateConfigs = () => {
  let config = {};
  config.elastic = {};
  config.elastic.username = 'elastic';
  config.elastic.password = 'changeme';
  config.elastic.host = '0.0.0.0';
  config.elastic.port = '9200';
  let base = JSON.stringify(config);
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir);
    fs.writeFileSync(configFile, base, 'utf8');
  }
  fs.writeFileSync(configFile, base, 'utf8');
};

module.exports = generateConfigs;
