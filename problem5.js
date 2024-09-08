function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "Invalid input";
  }
  let totalAmount = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      // deduct taxt amount
      let tax = payment * 0.2;
      totalAmount + payment - tax;
    } else {
      totalAmount += payment;
    }
  }

  let savings = totalAmount - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "Earn more";
  }
}

console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
