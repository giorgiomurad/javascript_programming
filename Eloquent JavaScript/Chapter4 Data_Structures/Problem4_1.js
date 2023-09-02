// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 4 : Data Structures: Objects & Arrays
//
// Problem 4.1 : Write a function 'range' that takes three arguments, 'start', 'end', and 'step',
//               and returns an array that contains all the numbers from start to end with 'step' as
//               the difference value between every two element values.
//               Write another function 'sum' that takes an array of numbers, and returns the sum of all
//               the numbers.
//
//
// Author : Giorgio Murad
const range = (start, end, step = 1) => {
    let temp = [];

    for (let i = start; i <= end; i += step) {

        temp.push(i);
    }
    return temp;
}

const sum = (arr) => {
    let s = 0;

    for (let i of arr)
        s += i;

    return s;
}


console.log(sum(range(0, 5)));