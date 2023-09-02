// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 3 : Functions
//
// Problem 3.2 : Define a function isEven that accepts a single parameter, and returns true if
//               the given number is even, and false otherwise.
//               The number should be a positive whole number.
//
//
// Author : Giorgio Murad

function isEven(value) {
    if(Number.isInteger(value) && value >= 0) {
        
            return (value % 2 === 0);
    }
}

let number = 14;

let even = isEven(number);
if(even === undefined) {

    console.log('Invalid Value');
}
else if (even !== undefined) {
    if (even)
        console.log('The number ' + number + ' is Even.');
    else
        console.log('The number ' + number + ' is Odd.');
}