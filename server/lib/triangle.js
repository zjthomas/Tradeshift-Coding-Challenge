
//  Verify that side lengths are correct to have a triangle
const isTriangle = (s1, s2, s3) => {
  if (s1 < s2 + s3 && s2 < s1 + s3 && s3 < s1 + s2) {
    return true;
  }
  return false;
}

//  Check if all sides are equal to each other 
const isEquilateral = (s1, s2, s3) => {
  if (s1 === s2 && s1 === s3) {
    return true;
  } else {
    return false;
  }
}

//  Check if two sides but not 3 are equal to each other
const isIsosceles = (s1, s2, s3) => {
  if (s1 === s2 && s1 !== s3) {
    return true;
  } else if (s1 === s3 && s1 !== s2) {
    return true;
  } else if (s2 === s3 && s2 !== s1) {
    return true;
  } else {
    return false;
  }
}

//  Determine type of triangle give 3 side lengths, 
//  default length is zero which will not create a valid triangle
const typeOfTriangle = (s1 = 0, s2 = 0, s3 = 0) => {
  if (isTriangle(s1, s2, s3)) {
    if (isEquilateral(s1, s2, s3)) {
      return 'Equilateral Triangle';
    } else if (isIsosceles(s1, s2, s3)) {
      return 'Isosceles Triangle';
    } else {
      return 'Scalene Triangle';
    }
  } else {
    return 'Not a Valid Triangle';
  }
}

module.exports = {
  typeOfTriangle,
  isEquilateral,
  isIsosceles,
  isTriangle,
}