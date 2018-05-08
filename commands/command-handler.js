const usage = require('../bin/entry').usage;
const generate = require('./generate/generate');


const commandHandler = (command) => {
  let input = command.split(' ');
  switch (input) {
    case input[0] === 'generate':
      if (input[1] === 'random') {
        generate(input[1]);
      } else if (input[1] === 'config') {
        generate(input[1]);
      } else usage();
      break;
    case input[0] === 'load':
      break;
    case input[0] === 'help':
      usage();
      break;
    default:
      usage();
  }
};

module.exports = commandHandler;
