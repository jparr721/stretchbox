const fs = require('fs');
const checkValidJson = require('../util/check-valid-json');
const file = require('../data/data-file');


const dataDir = `${__dirname}/../data`;
const generateData = (dataFile) => {
  if (!checkValidJson(dataFile)) console.error('Data file not supported! Fix issues and try again');
  let fields = JSON.parse(dataFile);
  let docs = new Array(5000).fill(undefined).map(() => generateRandomDocument(fields));
  fs.writeFileSync(`${dataDir}/bulk.json`, JSON.stringify(docs), 'utf8');
};

const generateRandomDocument = (data) => {
  let randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
  return Object.keys(data).reduce((acc, key) => {
    const value = randomItem(data[key]);
    return { ...acc, [key]: value };
  }, {});
};

const run = () => {
  generateData(file);
};

module.exports = run;
