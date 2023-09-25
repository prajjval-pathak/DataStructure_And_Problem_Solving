function findMissingNumber(arr) {
  if(!arr && arr.length === 0)
    return undefined
  const n=Math.max(...arr)
  const real_sum=((n*(n+1)/2))
  const sum=arr.reduce((accu,curr)=>accu+=curr,0)
  return real_sum-sum
}

module.exports = findMissingNumber;
