const createIndex = require('./create-index');
const deleteIndex = require('./delete-index');
const generateData = require('./generate-data');
const generateConfig = require('./generate-config');
const loadData = require('./load-data');
const checkConfig = require('../util/check-config');
const sleep = require('sleep');
const init = require('./init');
const build = require('./build');
const fs = require('fs');


const usage = () => {
  console.log(
    `
  npm run cmd [OPTION]

  OPTIONS --------------------------------------------------------------
    createIndex   [NAME]            Create the index
    deleteIndex   [NAME]            Delete the index
    init          [NAME], [TYPE]    Set up the environment
    build                           Build and run all containers
    generate [OPTION]
      config                        Generates a new config file if none exists
      bulk [NAME], [TYPE]           Generates new bulk data for an Elasticsearch instance (requires config)`);
};

const wait = () => {
  console.log('Waiting for elasticsearch to be ready (30 seconds)');
  sleep.sleep(30000);
};

switch (process.argv[2]) {
  case 'createIndex':
    if (process.argv[3] !== undefined) {
      let index = process.argv[3];
      createIndex(index).then((resp) => console.log(resp))
        .catch((e) => console.log(e));
    } else usage();
    break;
  case 'deleteIndex':
    if (process.argv[3] !== undefined) {
      deleteIndex(process.argv[3])
        .then((resp) => console.log(resp))
        .catch((e) => console.log(e));
    } else usage();
    break;
  case 'generate':
    if (process.argv[3] === 'config') generateConfig();
    else if (process.argv[3] === 'bulk') {
      generateData();
      loadData(process.env[4], process.env[5]);
    } else usage();
    break;
  // case 'init':
  //   init();
  //   break;
  case 'build':
    // init(type, index);
    build();
    wait();
    break;
  // case 'reset':
  //   console.log('Resetting');
  //   if (process.argv[3] !== null) {
  //     deleteIndex(process.argv[3]);
  //     fs.unlinkSync(`${__filename}bin/cats.json`);
  //   }
  //   usage();
  //   break;
  case 'help':
    console.log('Help --------------------------');
    usage();
    break;
  default:
    console.log('Invalid option selected');
    usage();
    break;

}
