const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const profile = require('./data/profile.json');


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/recommandations', (req, res) => {
  res.json(profile);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));