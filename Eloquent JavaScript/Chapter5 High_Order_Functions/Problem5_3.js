// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 5 : High-Order Functions
//
// Problem 5.3 : Write a function 'some' that takes an array, and a boolean function as parameter,
//               iterates through the given array, and returns true if a condition involving an
//               array element returns true.
//               Write a similar function 'every' that returns true if all the conditions of the
//               array elements are true.
//
//
// Author : Giorgio Murad

// Method that tests if the integer is even.
const isEven = (integer) => {

    return (integer % 2 === 0);
}


// Method 'some'
const some = (array, action) => {

    for (let i of array)
        if (action(i))
            return true;

    return false;
}

// Method 'every'
const every = (array, action) => {

    for (let i of array)
        if (!action(i))
            return false;

    return true;
}



// Testing if one of the array elements are even
console.log(some([0, 1, 2, 3, 4], isEven));

// Testing if all of the array elements are even
console.log(every([0, 2, 4, 6, 8], isEven));