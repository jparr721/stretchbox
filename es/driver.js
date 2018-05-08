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
  createBulk: (params) => {
    return new Promise((resolve, reject) => {
      client.bulk({
        maxRetries: 5,
        index: params.index,
        type: params.type,
        bulk: params.bulk,
      }, (err, resp) => {
        if (err) reject(err);
        resolve(resp);
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