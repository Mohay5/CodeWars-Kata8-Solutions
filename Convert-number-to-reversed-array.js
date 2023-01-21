// Given a random non-negative number, hou have to return the digits of this number within an array in reverse order

const digitize = n =>  n.toString().split('').map(Number).reverse();

let y = digitize(897231)

console.log(y)

 // Output: [5, 4, 3, 2, 1]