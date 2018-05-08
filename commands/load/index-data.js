const { curry } = require('lodash');


const indexData = (context, params) => {
  const { driver } = context;
  driver.createBulk(params);
};

module.exports = curry(indexData);
