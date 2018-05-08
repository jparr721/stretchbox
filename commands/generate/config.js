const fs = require('fs');
const readline = require('readline-sync');
const rimraf = require('rimraf');


const dataDir = `${__dirname}../../data`;
const dataFile = `${dataDir}/upload.js`;
const remakeDataDir = () => {
  console.log('Deleting data dir');
  rimraf.sync(dataDir);
  console.log('Remaking');
  fs.mkdirSync(dataDir);
};

const makeConfigObject = () => {
  let dataObj = {};
  dataObj['sample'] = [];
  return dataObj;
};

const config = () => {
  console.log('Creating data directory in project root');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
  else {
    let remake = readline.question('Folder exists, remake?: (y/n');
    if (remake === 'y' | remake === 'Y') remakeDataDir();
  }
  let dataObj = makeConfigObject();
  fs.writeFileSync(dataFile, JSON.stringify(dataObj));
};

module.exports = config;
