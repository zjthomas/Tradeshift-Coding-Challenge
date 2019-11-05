
const isTriangle = (s1, s2, s3) => {
  if (s1 < s2 + s3 && s2 < s1 + s3 && s3 < s1 + s2) {
    return true;
  }
  return false;

  // if (s1 > 0 && s2 > 0 && s3 > 0) {
  //   if (s1 < s2 + s3 && s2 < s1 + s3 && s3 < s1 + s2) {
  //     return true;
  //   }
  // }
  // return false;
}

const isEquilateral = (s1, s2, s3) => {
  if (s1 === s2 && s1 === s3) {
    return true;
  } else {
    return false;
  }
}

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

const typeOfTriangle = (s1 = 0, s2 = 0, s3 = 0) => {
  if (isTriangle(s1, s2, s3)) {
    if (isEquilateral(s1, s2, s3)) {
      return 'Equilateral';
    } else if (isIsosceles(s1, s2, s3)) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  } else {
    return 'Not a Valid';
  }
}

module.exports = {
  typeOfTriangle,
  isEquilateral,
  isIsosceles,
  isTriangle,
}