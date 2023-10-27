function reverseString(str) {
  if(str===""){
    return ""
  }
  else{
    return reverseString(str.slice(1))+str.charAt(0)
  }
}

module.exports = reverseString;
