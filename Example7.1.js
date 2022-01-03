const solution =(n)=>{
  const square=(n)=>{
    return n*n;
  }
  return (n*square(n))/ 4
}

console.log(solution(2))
