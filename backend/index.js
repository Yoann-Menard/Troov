'use strict';
/* eslint-env node, es6 */

const express = require('express');

const PORT = '6300';

const app = express();

app.get('/', async (req, res) => {
  res.send('hello World!');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});
