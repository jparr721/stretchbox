const { execSync } = require('child_process');
const sleep = require('sleep');
const printCliErrors = require('../util/print-cli-errors');


const networkExists = () => {
  execSync('docker network ls | grep esbot', (err, stdout, stderr) => {
    if (err || stderr) printCliErrors([err, stdout]);
    console.log(`stdout: ${stdout}`);
    if (stdout !== null) {
      return true;
    }
    return false;
  });
};

const killall = () => {
  execSync('docker ps -a | grep stretchbox', (err, stdout, stderr) => {
    if (err || stderr) printCliErrors([err, stdout]);
    if (stdout !== null) {
      console.log('Killing all docker processes');
      execSync('docker system prune -a');
      if (!networkExists()) {
        execSync('docker network create esbot');
      }
    }
  });
};

const docker = () => {
  console.log('Priming the jets... 🛫');
  killall();
  execSync('docker-compose down && docker-compose up -d', (err, stdout, stderr) => {
    if (err || stderr) printCliErrors([err, stdout]);
    console.log(`stdout: ${stdout}`);
  });
  sleep.sleep(30);
  console.log('We have liftoff! Happy hacking! 🚀');
};

module.exports = {
  docker,
  killall,
  networkExists,
};
