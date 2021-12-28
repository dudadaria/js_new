const firstSymbol = (str) => {
  let i=0;
  let result='';
  while(i<str.leught){
    result=result+str[i];
  }
  return `${result}!`;
};

console.log(firstSymbol(cat))
