function wordFrequencyCounter(str) {
  const FreqMap=new Map()
  const liString=str.toLowerCase().split(/\W+/)
  for(let i=0;i<liString.length;i++){
    if(liString[i]==='')continue
    if(FreqMap.has(liString[i])){
      FreqMap.set(liString[i],FreqMap.get(liString[i])+1)
    }
  
    else{
      FreqMap.set(liString[i],1)
    }
   
  }
  return FreqMap
}

module.exports = wordFrequencyCounter;
