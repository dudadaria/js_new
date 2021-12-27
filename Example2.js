const smallestDivisor = (num) => {
  // Если num по условию равно 1, то возвращаем 1
  if (num === 1) {
    return 1;
  }

  // Внутренная функция для расчета минимального делителя.
  const subFn = (number, min) => {
    if (number === min) {
      return min;
    }
    if (number % min === 0) {
      return min;
    }
    return subFn(number, min + 1);
  };
  return subFn(num, 2);
};


console.log(smallestDivisor(15))
