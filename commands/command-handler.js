const usage = require('../bin/entry').usage;
const generate = require('./generate/generate');
const load = require('./load/load-data');


const commandHandler = (command) => {
  let input = command.split(' ');
  switch (input[0]) {
    case 'generate':
      if (input[1] === 'random') {
        let params = [input[2], input[3]];
        generate(input[1]);
        // load(true, params);
      } else if (input[1] === 'config') {
        generate(input[1]);
      } else usage();
      break;
    case 'load': {
      let params = [input[2], input[3]];
      load(false, params);
      break;
    }
    case 'help':
      console.log('help hit');
      usage();
      break;
    default:
      console.log('Default hit');
      usage();
  }
};

module.exports = commandHandler;
