// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 2 : Program Structure
//
// Problem 2.2 : Write a program that prints all the numbers from 1 to 100.
//                  - For numbers divisible by 3, "Fizz" is printed instead of the number.
//                  - For numbers divisible by 5, "Buzz" is printed instead of the number.
//                  - For numbers divisible by 3 and 5, "FizzBuzz" is printed.
//
//
// Author : Giorgio Murad

// Iterating one-hundred times
for (let i = 1; i <= 100; i++) {

    // Condition if i is divisible by 3 and 5
    if (i % 3 == 0 && i % 5 == 0)
        console.log('FizzBuzz');

    // Condition if i is divisible by only 3
    else if (i % 3 == 0)
        console.log('Fizz');

    // Condition if i divisible by only 5
    else if (i % 5 == 0)
        console.log('Buzz');

    // If all conditions were false
    else
        console.log(i);
}