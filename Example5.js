const reverse = (str) => {
  let i = str.length - 1;
  let result = "";
  while (i >= 0 && i<str.length) {
    result = result + str[i];
   i = i - 1;
  }
  return result
}

console.log(reverse("cat"))
