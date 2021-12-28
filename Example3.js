const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN
  }
  if (num === 1) {
    return 1;
  }

  let min = 2;
  while (num % min !== 0) {
    min = min + 1;
  }
    return min
  }


console.log(smallestDivisor(50))
