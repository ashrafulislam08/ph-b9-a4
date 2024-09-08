// Problem 2

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  let lastLetter = name.slice(-1).toLowerCase();
  let checkArray = ["a", "y", "i", "e", "o", "u", "w"];
  //   let result = false;
  //   for (const char of checkArray) {
  //     if (char === lastLetter) {
  //       result = true;
  //     }
  //   }
  let result = checkArray.includes(lastLetter);
  return result ? "Good Name" : "Bad Name";
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName("Ashraful"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
