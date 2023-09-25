function removeDuplicates(arr) {
  //With set
  const hel=new Set(arr)
  return Array.from(hel)

}  

module.exports = removeDuplicates;
