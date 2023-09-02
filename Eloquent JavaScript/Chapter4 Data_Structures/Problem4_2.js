// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 4 : Data Structures: Objects & Arrays
//
// Problem 4.2 : Write two functions:
//                          - A function called 'reverseArray' that takes an array as parameter, and returns
//                            a new array with the elements reversed.
//                          - A function called 'reverseArrayInPlace' that reverses the elements of the array
//                            without creating a new array.
//
//
// Author : Giorgio Murad

const reverseArray = (arr) => {
    let newArr = [];

    for (let i of arr)
        newArr.unshift(i);

    return newArr;
}

const reverseArrayInPlace = (arr) => {
    let initSize = arr.length;

   for (let i = initSize-1; i >= 0; i--)
       arr.push(arr[i]);

    arr = arr.slice(initSize);
    return arr;
}

console.log(reverseArrayInPlace([0, 1, 2, 3]));