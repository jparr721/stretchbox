const fs = require('fs');
const seedFile = require('./seed/seedfile');


const seedDir = `${__dirname}/seed`;
const generateRandomDocument = (data) => {
  let randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
  return Object.keys(data).reduce((acc, key) => {
    const value = randomItem(data[key]);
    return { ...acc, [key]: value };
  }, {});
};

const randomize = () => {
  let fields = seedFile;
  let docs = new Array(5000).fill(undefined).map(() => generateRandomDocument(fields));
  fs.writeFileSync(`${seedDir}/bulk.json`, JSON.stringify(docs), 'utf8');
};

module.exports = randomize;
