const client = require('../es/client');


const createIndex = (index) => {
  return new Promise((resolve, reject) => {
    client.indices.create({
      index: index,
    }, (err, resp) => {
      if (err) reject(err);
      resolve(resp);
    });
  });
};

module.exports = createIndex;

