const docker = require('../build/docker');
const cli = require('./cli');


const startup = () => {
  console.log('Starting...');
  if (process.env[2] === '-d') {
    console.log('Running detatched');
    docker.docker();
  } else {
    docker.docker();
    cli();
  }
};

startup();
module.exports = startup;
