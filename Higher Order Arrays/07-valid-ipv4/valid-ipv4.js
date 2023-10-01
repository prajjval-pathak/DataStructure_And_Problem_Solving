const isValidIPv4 = (string) => {
const splittedAddress=string.split('.')
if(splittedAddress.length!=4)
  return false
else{
  const checkValid=splittedAddress.every(ct=>{
    console.log(ct.length)
    return parseInt(ct)>=0&&parseInt(ct)<=255&& !(ct.charAt(0)==0 && ct.length!=1)})
  return checkValid
}

};

module.exports = isValidIPv4;
//122
