/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

const arrowAvgValue = arr => {
  let sum = 0;

  arr.forEach( el => {
    sum += el;
  });

  return sum / arr.length;
}


let a = arrowAvgValue([10, 20]); // => 15
let b = arrowAvgValue([2, 3, 7]); // => 4
let c = arrowAvgValue([100, 60, 64]); // => 74.66666666666667

console.log(a);
console.log(b);
console.log(c);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
