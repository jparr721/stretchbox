const fs = require('fs');
const driver = require('../../es/driver');
const indexData = require('./index-data');
const prepareBulkData = require('./prepare-bulk-data');
const seedFile = require('../generate/seed/seedfile');


const context = { driver };
const dataDir = `${__dirname}../data`;
const dataFile = `${__dirname}../data/upload.js`;
const loadData = (random, params) => {
  if (!random) {
    if (fs.existsSync(dataDir)) {
      prepareBulkData(JSON.stringify(dataFile), params);
      indexData(context, params);
    } else {
      console.log('Error! Please run generate config first to get a data dir');
    }
  } else {
    prepareBulkData(seedFile, params);
    indexData(context, params);
  }
};

module.exports = loadData;
