const express = require('express');
const app = express();
const port = 5000;

app.use(express.static("dist"));

app.get('/home', (req, res) => {
  res.send('djkj')
})

app.listen(port, () => {
  console.log('listening on 5000')
})