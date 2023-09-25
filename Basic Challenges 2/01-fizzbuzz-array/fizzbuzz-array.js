function fizzBuzzArray(num) {
  const ar=[]
  for(let i=1;i<=num;i++){
    if(i%3===0 && i%5===0)
      ar.push("FizzBuzz")
    else if(i%3===0)
      ar.push("Fizz")
    else if(i%5===0)
      ar.push("Buzz")
    else
      ar.push(i)
  }
  return ar
}

module.exports = fizzBuzzArray;
