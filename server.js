const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.send('yo')
// })

app.listen(port, () => {
  console.log('listening on 5000')
})