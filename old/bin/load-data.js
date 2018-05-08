const client = require('../es/client.js');


let bulk = [];
const loadSampleData = (list, indx, type) => {
  list.map((current, id) => {
    bulk.push(
      { index: { _index: indx, _type: type, _id: id } },
      current
    );
  });
  return bulk;
};

const indexSampleData = (finishedbulk, _index, _type) => {
  return new Promise((resolve, reject) => {
    client.bulk({
      maxRetries: 5,
      index: _index,
      type: _type,
      body: finishedbulk,
    }, (err, resp) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
};

const run = (index, type) => {
  const dataFile = require('../data/bulk.json');
  let newbulk = loadSampleData(dataFile, index, type);
  indexSampleData(newbulk, index, type);
};

module.exports = run;
