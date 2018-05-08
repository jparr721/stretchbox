const usage = require('../bin/entry').usage;
const generate = require('./generate/generate');
const load = require('./load/load-data');


const commandHandler = (command) => {
  let input = command.split(' ');
  switch (input) {
    case input[0] === 'generate':
      if (input[1] === 'random') {
        let params = [input[2], input[3]];
        generate(input[1]);
        load(true, params);
      } else if (input[1] === 'config') {
        generate(input[1]);
      } else usage();
      break;
    case input[0] === 'load': {
      let params = [input[2], input[3]];
      load(false, params);
      break;
    }
    case input[0] === 'help':
      usage();
      break;
    default:
      usage();
  }
};

module.exports = commandHandler;
