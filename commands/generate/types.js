'use strict';

const random = require('./random');
const config = require('./config');


module.exports = {
  random: random(),
  config: config(),
};
