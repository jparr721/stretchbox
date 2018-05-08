const express = require('express');
const bodyParser = require('body-parser');
const api_search = require('./routes/search');


const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.set('port', port);
app.use('/', api_search);
app.get('*', (req, res) => {
  res.status(404).send('OH NOO NOT TODAY BOYYY');
});

/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, statusCode: 500 });
});
/* eslint-enable no-unused-vars */

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
