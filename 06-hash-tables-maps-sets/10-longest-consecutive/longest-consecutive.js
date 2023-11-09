function longestConsecutiveSequence(numArr) {
  const yp=numArr.sort(function(a, b){return a - b})
  console.log(yp)
  let count=1
 const noDuoSet=new Set([...yp])
  for(const bt of noDuoSet){
    if(noDuoSet.has(bt+1)){
      count+=1
    }
    else{break}
  }
  return count
}

module.exports = longestConsecutiveSequence;
