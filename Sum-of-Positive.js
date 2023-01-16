// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note:IF there is nothing to sum, thesum is default to 0.


const sumPositives = arr => arr.filter((x) => x >0).reduce((acc, curent) => acc + curent, 0)
let yasmine = sumPositives([1,10])
console.log(yasmine)