function power(num,pow) {
  if(pow===0){
    return 1
  }
  else{
    return power(num,pow-1)*num
  }
}


//power(2.3)*2
//power(2,2)*2
//power(2,1)*2
//1
module.exports = power;
