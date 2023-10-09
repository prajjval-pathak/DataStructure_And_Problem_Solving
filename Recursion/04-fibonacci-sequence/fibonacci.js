function fibonacci(str) {
  if(str<=1)
    return str
  else
    return fibonacci(str-1)+fibonacci(str-2)
}

module.exports = fibonacci;
