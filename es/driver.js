const client = require('./client');


module.exports = {
  createIndex: (params) => {
    return new Promise((resolve, reject) => {
      client.indices.create({
        index: params.index,
      }, (err, resp) => {
        if (err) reject(err);
        resolve('create', resp);
      });
    });
  },
  deleteIndex: (params) => {
    return new Promise((resolve, reject) => {
      client.indices.delete({
        index: params.index,
      }, (err, resp) => {
        if (err) reject(err);
        resolve('delete', resp);
      });
    });
  },
  search: (params) => {
    return new Promise((resolve, reject) => {
      client.search({
        index: params.index,
        type: params.type,
        body: params.body,
      }, (err, resp) => {
        if (err) reject(err);
        resolve(resp);
      });
    });
  },
};
