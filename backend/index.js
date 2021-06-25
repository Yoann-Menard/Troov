const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = '6300';
require('dotenv/config');

const usersRoute = require('./routes/users');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/users', usersRoute);

app.get('/', async (req, res) => {
  res.send('hello World!');
});

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Connexion à la base de données effectuée'),
);

app.listen(PORT, () => {
  console.log(`Serveur démarrer : http://localhost:${PORT}`);
});
