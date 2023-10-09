function arraySum(arr) {
  if(arr.length==1){
    return arr[0]
  }
  else if(arr.length===0){
    return 0
  }
  else{
    return arraySum(arr.splice(1))+arr[0]
  }
}

module.exports = arraySum;
