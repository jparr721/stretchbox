'use strict';

const express = require('express');
const query = require('../es/queries');
const asyncMiddleware = require('../middleware/async-middleware');


const router = express.Router();
router.get('/search', asyncMiddleware(async (req, res) => {
  const queryKeys = Object.keys(req.query);
  if (queryKeys.length !== 1) {
    throw new Error('You must provide exactly one query param, DOOFUS');
  }
  const fieldKey = queryKeys[0];
  let catInfo;
  await query.search('cats', 'cat', fieldKey, req.query[fieldKey])
    .then((resp) => catInfo = resp)
    .catch((e) => console.log(`Error! ${e}`));
  const mappedInfo = catInfo.hits.hits.map(doc => doc._source);
  res.json(mappedInfo);
}));

module.exports = router;
