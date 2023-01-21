// Write a function called repeatStr Which repeats the given string exactly n Times


function repeatStr(str, n) {
    let repeatedString = "";
    for (let i = 0; i < n; i++) {
      repeatedString += str;
    }
    return repeatedString;
  }

  console.log(repeatStr("Hello", 3)); 
// Output: "HelloHelloHello"


