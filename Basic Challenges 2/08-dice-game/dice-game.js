function diceGameSimulation(rolls) {
//declare array  which will contain obj
const arr=[]
for(let i=0;i<rolls;i++){
  const obj={}
  const dice1_val=Math.floor(Math.random()*6)+1
  const dice2_val=Math.floor(Math.random()*6)+1
  obj["dice1"]=dice1_val
  obj["dice2"]=dice2_val
  const sum=dice1_val+dice2_val
  obj["sum"]=sum
  if(sum===7 || sum===11){
    const result="win"
    obj["result"]=result
  }
  else if(sum===2|| sum===3|| sum===12){
    const result="lose"
    obj["result"]=result
  }
  else{
    const result="roll again"
    obj["result"]=result
  }
  
 arr.push(obj)

}
return arr
}

module.exports = diceGameSimulation;
