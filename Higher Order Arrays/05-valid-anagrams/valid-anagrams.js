function validAnagrams(st1,st2) {
let obj1={}
let obj2 ={}
st1.split('').forEach(element => {
  if(obj1[element]){
    obj1[element]+=1
  }
  else{
    obj1[element]=1
  }
});
st2.split('').forEach(element => {
  if(obj2[element]){
    obj2[element]+=1
  }
  else{
    obj2[element]=1
  }
});
return Object.keys(obj1).every(char=>obj1[char]===obj2[char])
}

module.exports = validAnagrams;
