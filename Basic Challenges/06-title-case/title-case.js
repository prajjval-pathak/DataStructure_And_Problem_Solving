function titleCase(str){
  let newStr=""
  const arr=str.split(" ")
  for(let i=0;i<arr.length;i++){
    if(i!=arr.length-1){
    newStr+=arr[i][0].toUpperCase()+arr[i].slice(1)+" "}
    else
    newStr+=arr[i][0].toUpperCase()+arr[i].slice(1)
  }
  return newStr
}

module.exports = titleCase;
