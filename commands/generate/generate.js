const random = require('../generate/random');
const config = require('../generate/config');


const generate = (type) => {
  if (type === 'random') {
    console.log('Running random!');
    random();
  } else if (type === 'config') {
    config();
  } else {
    console.log(`Invalid generation type of: ${type} specified. Please try again`);
  }
};

module.exports = generate;
