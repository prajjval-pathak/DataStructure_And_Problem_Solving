function arrayIntersection(ar1,ar2) {
  const arr=[]
  for(let i=0;i<ar1.length;i++){
    if(ar2.includes(ar1[i]))
      arr.push(ar1[i])
  }
  return arr
}

module.exports = arrayIntersection;

