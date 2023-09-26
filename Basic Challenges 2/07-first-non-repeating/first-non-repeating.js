function findFirstNonRepeatingCharacter(str) {
const obj={}
  for(const char of str){
    if(obj[char])
      obj[char]+=1
    else{
      obj[char]=1
    }
  }
  for(const prop in obj){
    if(obj[prop]===1){
      return prop
    }
  }
  return null
}

module.exports = findFirstNonRepeatingCharacter;
  