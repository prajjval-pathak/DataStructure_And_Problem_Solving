function twoSum(numArr,target) {
  const numMap=new Set;
  for(let i=0;i<numArr.length;i++){
    const complement=target-numArr[i]
  if(numMap.has(complement)){
  return [numArr.indexOf(complement),i]
  }
  numMap.add(numArr[i])
  }
  return[]
}

module.exports = twoSum;
