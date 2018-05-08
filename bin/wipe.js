const rimraf = require('rimraf');
const fs = require('fs');
const driver = require('../es/driver');


const dataDir = `${__dirname}../data`;
const wipe = () => {
  console.log('Wiping data directories');
  if (fs.existsSync(dataDir)) rimraf.sync(dataDir);
  else console.log('No data directory present, please generate one first');
};

module.exports = wipe;
