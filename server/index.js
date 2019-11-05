const express = require('express');
const path = require('path')
const TriangleController = require('./controllers/triangle')

const app = express();
const port = 3000;

//add Static files
app.use(express.static(path.join(__dirname, '../dist')));

//add Routes
app.get('/triangle/type', TriangleController.triangleType);


app.listen(port, () => console.log(`Now listening on port ${port}`));