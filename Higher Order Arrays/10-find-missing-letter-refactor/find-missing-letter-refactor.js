function findMissingLetter(ar) {
  let firstIndex = ar[0].charCodeAt(0);

  const solnUsingMap = ar
    .slice(1)
    .map((xt) => {
      console.log(xt)
      return xt.charCodeAt(0)})
    .find((ct) => {
      console.log(ct-firstIndex)
      if (ct - firstIndex > 1) {
        console.log("here")
        return true;
      }
      firstIndex = ct;
      return false;
    });
  console.log(solnUsingMap);
  return solnUsingMap ? String.fromCharCode(solnUsingMap - 1) : "";
}

module.exports = findMissingLetter;
