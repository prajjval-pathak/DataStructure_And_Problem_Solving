function countVowels(str) {
  const formated_str=str.toLowerCase().replace(/[aeiou]/g,"")
  return str.length-formated_str.length
  
}

module.exports = countVowels;
