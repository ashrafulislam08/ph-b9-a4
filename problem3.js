// Problem  3
function deleteInvalid(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  let numberArray = [];
  for (let element of array) {
    if (typeof element === "number" && isNaN(element) === false) {
      numberArray.push(element);
    }
  }

  return numberArray;
}

// Test problem 3
console.log(
  deleteInvalid([1, null, undefined, 18, 19, NaN, "12", [1, 2], { oh: "lala" }])
);
