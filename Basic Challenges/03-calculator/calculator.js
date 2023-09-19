function calculator(a,b,operand) {
switch(operand){
  case '+':
     return a+b
  case '-':
    return a-b

  case '*':
    return a*b

  case'/':
    return a/b
  default:
    throw new Error("What up")

}
}

module.exports = calculator;
