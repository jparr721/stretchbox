const rimraf = require('rimraf');
const killall = require('../build/docker').killall;


const cleanup = (nuke) => {
  console.log('Cleaning up elasticsearch data');
  if (nuke) {
    killall();
    const dataDir = `${__dirname}/../elasticdata/`;
    rimraf.sync(dataDir);
  } else {
    killall();
  }
};

module.exports = cleanup;
