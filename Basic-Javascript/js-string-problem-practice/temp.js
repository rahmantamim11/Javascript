let first = 5;
let second = 7;

/***
 * Approach1
 * *****/ 

// const temp = first;

// first = second;
// second = temp;

// Approach2 destructuring

[ first, second ] = [ second, first ];

console.log(first, second);