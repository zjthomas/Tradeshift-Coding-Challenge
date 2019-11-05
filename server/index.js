const express = require('express');
const path = require('path')
const { typeOfTriangle } = require('./lib/triangle');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/triangle', (req, res) => {
  const {side1, side2, side3} = req.query;
 
  res.status(200).send(JSON.stringify(typeOfTriangle(Number(side1), Number(side2), Number(side3))));
});


app.listen(port, () => console.log(`Now listening on port ${port}`));