// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 3 : Functions
//
// Problem 3.1 : Write a function that takes two numbers as parameters, and returns the least value.
//
//
// Author : Giorgio Murad

function min(value1, value2) {

    return (value1 > value2)? value2 : value1;
}

console.log(min(1, 2));