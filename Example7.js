const getTriangleArea = (h, b) =>{
  let result = ((h * b)/2);
  if (h===0 || b===0){
    return NaN;
  }
  else if (h<0 && b<0){
    return result;
  }
  else if (h<0 || b<0){
    return result*(-1);
  }
  return result;
}


console.log (getTriangleArea(5,10))
