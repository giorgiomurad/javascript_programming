// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 5 : High-Order Functions
//
// Problem 5.1 : Use the 'reduce' function in combination with 'concat' to "flatten" an
//               array of arrays into a single array that contains all of the elements
//               of the original arrays.
//
//
// Author : Giorgio Murad

let twoDArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let oneDArr = twoDArr.reduce((a, b) => a.concat(b));
console.log(oneDArr);