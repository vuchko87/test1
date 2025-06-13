const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Dobro došli na Nemanjin sajt</h1>');
});

app.listen(port, () => {
  console.log(`Sajt je pokrenut na http://localhost:${port}`);
});