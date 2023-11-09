function numberRange(num1,num2) {
  if(num1===num2){
    return [num1]
  }
  else{
      const result=numberRange(num1,num2-1)
      result.push(num2)
      return result
  }
}


//[1,4]
//[1,3]
//[1,2]
//1
module.exports = numberRange;
