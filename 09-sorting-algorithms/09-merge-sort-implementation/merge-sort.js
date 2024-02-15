function mergeSort(arr) {
  if(arr.length<=1){
    return arr
  }
  const mid=Math.floor(arr.length/2)
  const left=mergeSort(arr.slice(0,mid))
  const right=mergeSort(arr.slice(mid))
  return merge(left,right)
}
const merge=(left,right)=>{
  const res=[]
  let i=0
  let j=0
  while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      res.push(left[i])
      i++
    }
    else{
      res.push(right[j])
      j++
    }
  }
  return res.concat(left.slice(i)).concat(right.slice(j))
}

module.exports = mergeSort;
