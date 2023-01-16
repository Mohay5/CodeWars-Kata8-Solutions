// Check if Empty Value return 0
// Find the heighest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the array


function sumWithoutTheHeighestAndLowestNumber(array) {
    if (!Array.isArray(array) || array.length < 3) return 0;
    array.sort((a, b) => a - b);
    const highest = array.pop();
    const lowest = array.shift();
    return array.reduce((acc, current) => acc + current, 0);
}
console.log(sumWithoutTheHeighestAndLowestNumber([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));