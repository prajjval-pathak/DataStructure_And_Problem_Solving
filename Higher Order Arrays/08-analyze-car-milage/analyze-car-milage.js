function analyzeCarMileage(arr) {
  const totalMileage=arr.reduce((total,acc)=>total+acc.mileage,0)
 const averageMileage=parseFloat((totalMileage/arr.length).toFixed(2))
 const highestMileageCar=arr.reduce((total,acc)=>total.mileage<acc.mileage?total=acc:total,arr[0])
 const lowestMileageCar=arr.reduce((total,acc)=>total.mileage>acc.mileage?total=acc:total,arr[0])
 const obj={averageMileage,
highestMileageCar,
lowestMileageCar,
totalMileage}
return obj
}

module.exports = analyzeCarMileage;
