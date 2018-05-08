const elasticsearch = require('elasticsearch');


let hostString = 'http://elastic:password@0.0.0.0:9200';
const client = new elasticsearch.Client({ host: hostString });

module.exports = client;
