function symmetricDifference(arr1,arr2) {
  const set1=new Set(arr1)
  const set2=new Set(arr2)
  const ct=[]
  for(const element of set1){
    if(!set2.has(element)){
      console.log("here")
      ct.push(element)
    }
  }
   for(const element of set2){
    if(!set1.has(element)){
      ct.push(element)
    }
  }
  return ct
}

module.exports = symmetricDifference;
