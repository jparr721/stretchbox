const client = require('./client');


module.exports = {
  create: (index, type, name, color, toy, owner) => {
    return new Promise((resolve, reject) => {
      client.index({
        index: index,
        type: type,
        body: {
          name: name,
          color: color,
          favoriteToy: toy,
          owner: owner,
        },
      }, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  },
  delete: (index) => {
    return new Promise((resolve, reject) => {
      client.delete({ index: index }, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  },
  search: (index, type, fieldKey, fieldValue) => {
    return new Promise((resolve, reject) => {
      client.search({
        index: index,
        type: type,
        body: {
          query: {
            match: { [fieldKey]: fieldValue },
          },
        },
      }, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  },
};

