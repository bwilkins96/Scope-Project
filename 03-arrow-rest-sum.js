/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

const arrowRestSum = (...nums) => {
  let sum = 0;

  nums.forEach( n => {
    sum += n;
  });

  return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}


let a = arrowRestSum(3,5,6); // => 14
let b = arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
let c = arrowRestSum(0); // => 0

console.log(a);
console.log(b);
console.log(c);
