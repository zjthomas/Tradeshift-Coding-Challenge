const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/sides/:side1/:side2/:side3', (req, res) => {
  console.log(req.params);
  res.end();
})


app.listen(port, () => console.log(`Now listening on port ${port}`));