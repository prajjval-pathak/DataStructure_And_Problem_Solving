// function validatePassword(str) {
//   let numflag=false
//   let upperCaseFlag=false
//   let lowerCaseFlag=false
  
//   function isCharNumber(c) {
//    const ct= c >= '0' && c <= '9';
//     if(ct===true)
//       numflag=true
//   }
//   function isUpperCase(c) {
//     const ct= /^[A-Z]*$/.test(c);
//     console.log(ct,c)
//      if(ct===true)
//         console.log("here")
//        upperCaseFlag=true
//    }
//   function isLowerCase(c){
//     const ct= /^[a-z]*$/.test(c);
//     console.log(ct,c)
//     if(ct===true)
//       lowerCaseFlag=true
//   }
//   console.log(str.length)
//   if(str.length>=8){
//   let i=0
//   while(i<str.length){
//     if(!numflag)
//       isCharNumber(str[i])
//     else if(!upperCaseFlag)
//       isUpperCase(str[i])
//     else if(!lowerCaseFlag)
//       isLowerCase(str[i])
//     if(numflag && lowerCaseFlag && upperCaseFlag)
//       return true
//     i++
//   }
//   return false
// }
// else
//   return false

function validatePassword(password) {
  // Check if password is at least 8 characters long
  const isLengthValid = password.length >= 8;

  // Check if password contains at least one uppercase letter
  // The `some` method returns true if at least one element in the array satisfies the condition
  const hasUppercase = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  // Check if password contains at least one lowercase letter
  const hasLowercase = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  // Check if password contains at least one digit
  const hasDigit = password
    .split('')
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
}
module.exports = validatePassword;
