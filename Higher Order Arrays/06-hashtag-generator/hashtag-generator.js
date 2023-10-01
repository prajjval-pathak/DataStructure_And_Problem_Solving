function generateHashtag(string) {
  if(string.trim().length===0 || string.trim().length>140){
    return false
  }
  else{
    const formattedString=string.trim().split(" ").map(ct=>ct.charAt(0).toUpperCase()+ct.substring(1)).join('')
    return "#"+formattedString
  }
}

module.exports = generateHashtag;
