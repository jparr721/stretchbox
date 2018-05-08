const readline = require('readline-sync');
const options = require('../commands/options');
const commandHandler = require('../commands/command-handler');
const cleanup = require('./cleanup');


const cli = () => {
  let option = '';
  console.log('Interpreter is now running! For help type \'help\'');
  while (option !== 'exit') {
    option = readline.question('> ');
    options.options.forEach((opt) => {
      if (option.includes(opt)) commandHandler(option);
    });
  }
  let save = readline.question('Save elasticsearch data for future sessions?(y/n): ');
  if (save === 'n' | save === 'N') {
    console.log('Cleaning up, please wait...');
    cleanup(true);
  } else if (save === 'y' | save === 'Y') {
    console.log('Cleaning up and saving data...');
    cleanup(false);
    console.log(`Docker cleaned, data saved to ${__dirname}../elasticdata directory`);
  }
  console.log('Thanks for stopping by, space cowboy 🚀');
};

module.exports = cli;
