function anagramGrouping(strArr) {
  const arrMap=new Map()
  for(word of strArr){
    const FormattedString=word.split("").sort().join("")
    if(arrMap.has(FormattedString)){
      arrMap.get(FormattedString).push(word)
    }
    else{
      arrMap.set(FormattedString,[word])
    }
  }
  return Array.from(arrMap.values())
}

module.exports = anagramGrouping;
