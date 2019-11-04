
const isTraingle = (s1, s2, s3) => {
  if (s1 === 0 || s1 === undefined)
  if (s1 < s2 + s3 && s2 < s1 + s3 && s3 < s1 + s2) {
    return true;
  } else {
    return false;
  }
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

const typeOfTriangle = (s1, s2, s3) => {
  if (isTraingle(s1, s2, s3)) {

  }
}