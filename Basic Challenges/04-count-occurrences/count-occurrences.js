function countOccurrences(word,searchString) {
 return word.split(searchString).length - 1;
  // const arr=word.split('').filter((pt)=>pt===searchString).length
}

module.exports = countOccurrences;
