const client = require('../es/client');


const deleteIndex = (index) => {
  return new Promise((resolve, reject) => {
    client.indices.delete({
      index: index,
    }, (err, resp) => {
      if (err) reject(err);
      resolve('delete', resp);
    });
  });
};

module.exports = deleteIndex;
