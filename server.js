const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('.get')
})

app.listen(3000)