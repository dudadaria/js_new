const isPrime = (n) => {
  for (let counter = 2; counter !== n; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }
  return true;

}

console.log(isPrime(17))
