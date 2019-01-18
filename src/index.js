const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const profile = require('./data/profile.json');

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/recommandations', (req, res) => {
  res.json(profile);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));