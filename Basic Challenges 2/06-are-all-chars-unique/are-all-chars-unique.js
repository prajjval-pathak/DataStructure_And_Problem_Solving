function areAllCharactersUnique(str) {
  const hello=new Set()
  for(let i=0;i<str.length;i++){
    if(hello.has(str[i])){
      return false
    }
    hello.add(str[i])
  }
  return true
}

module.exports = areAllCharactersUnique;
