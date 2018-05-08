const { execSync } = require('child_process');
const sleep = require('sleep');
const printCliErrors = require('../util/print-cli-errors');


const killall = () => {
  execSync('docker system prune -a --force');
};

const docker = () => {
  console.log('Priming the jets... 🛫');
  killall();
  execSync('docker-compose down && docker-compose up -d', (err, stdout, stderr) => {
    if (err || stderr) printCliErrors([err, stdout]);
    console.log(`stdout: ${stdout}`);
  });
  sleep.sleep(30);
  console.log('We have liftoff! Happy hacking! 🚀\n');
};

module.exports = {
  docker,
  killall,
};
