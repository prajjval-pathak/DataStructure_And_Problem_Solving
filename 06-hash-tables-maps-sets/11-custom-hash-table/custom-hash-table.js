class HashTable {
  constructor(limit=14){
    this.limit=limit,
    this.storage=[]
  }
  _hash(key,max){
    let hash=0
    for(let i=0;i<key.length;i++){
      hash+=key.charCodeAt(i)
    }
    return hash%max
  }
  print(){
    console.log(this.storage)
  }
  set(key,value){
    const index=this._hash(key,this.limit)
    console.log(index)
    if(this.storage[index]===undefined){
      this.storage[index]=[[key,value]]
    }
    else{
      let inserted=false
      for(let i=0;i<this.storage[index].length;i++){
        if(this.storage[index][i][0]===key){
          this.storage[index][i][1]=value
          inserted=true
        }
      }
      if(inserted===false){
        this.storage[index].push([key,value])
    }
  }
  }
  get(key){
    const index=this._hash(key,this.limit)
    console.log("Rui"+index)
    if(this.storage[index]===undefined){
      return undefined
    }
    else{
      for(let i=0;i<this.storage[index].length;i++){
        if(this.storage[index][i][0]===key){
          return this.storage[index][i][1]
        }
      }
    }
  }
  has(key){
    const index=this._hash(key,this.limit)
    if(this.storage[index]===undefined){return false}
    else{
      for(let i=0;i<this.storage[index].length;i++){
        if(this.storage[index][i][0]===key){return true }
      }
  }
    return false
  }
  getValues() {
    const values = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          values.push(this.storage[i][j][1]);
        }
      }
    }
    return values;
  }
  remove(key){
    const index=this._hash(key,this.limit)
    if(this.storage[index]){
    if(this.storage[index].length===1 && this.storage[index][0][0]===key){
      delete this.storage[index]
    }
    else{
      for(let i=0;i<this.storage[index].length;i++){
        if(this.storage[index][i][0]===key){
          delete this.storage[index][i]
        }
      }
    }
  }
}
}
//Tests
let cd=new HashTable()
cd.set("Prajjval","Naina")
cd.set("Rui","Nikita")
cd.print()
//Get key test
console.log(cd.get("Prajjval")) 
//Has Test
console.log(cd.has("Prajjval"))
//Remove Key Test
cd.remove("Rui") 

console.log(cd.has("Rui"))

module.exports = HashTable;
