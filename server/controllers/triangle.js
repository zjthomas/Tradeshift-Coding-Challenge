const { typeOfTriangle } = require('../lib/triangle');

const triangleType = (req, res) => {
  const { side1, side2, side3 } = req.query;
  
  const type = typeOfTriangle(Number(side1), Number(side2), Number(side3));
  
  res.send(type);
  return;
};

module.exports = {
  triangleType
};