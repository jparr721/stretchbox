const createIndex = require('./create-index');
const generateData = require('./generate-data');
const loadData = require('./load-data');


const init = (type, index) => {
  console.log('Generating data');
  generateData();
  console.log('Loading data into elastic search');
  loadData(index, type);
  console.log('Creating cats index');
  createIndex(index)
    .then(res => console.log(res))
    .catch(e => console.log(`Error! ${e}`));
};

module.exports = init;
