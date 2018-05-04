const elasticsearch = require('elasticsearch');
const esconf = require('../config/config.json');


let stringdata = JSON.stringify(esconf);
let data = JSON.parse(stringdata);
let hostString = `http://${data.elastic.username}:${data.elastic.password}@${data.elastic.host}:${data.elastic.port}`;

const client = new elasticsearch.Client({ host: hostString });
module.exports = client;
