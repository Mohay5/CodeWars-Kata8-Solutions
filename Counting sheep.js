// Consider an arraylist of sheep wher some sheep may be 
// missing from their place. We need a function that counts
// the number of sheep present in the array (true means present)

function countSheep(sheepArray) {
    return sheepArray.filter(sheep => sheep === true).length;
}
let sheepArray = [true,  true,  true,  false,  true, true, false];
console.log(countSheep(sheepArray));
// Output: 5





