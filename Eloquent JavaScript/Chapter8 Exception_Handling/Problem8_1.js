// Eloquent Javascript
// Chapter 8 : Exception Handling
// 
// Problem 8.1 : Write a function 'primitiveMultiply' where in 20 percent of cases multiplies two numbers,
//               and in 80 percent of cases throws a MultiplicationUnitFailure error.
//               Write another function that keeps trying to multiply two numbers until it succeeds, after
//               which it returns the result.
//
//
// Author : Giorgio Murad

class MultiplicationUnitFailure extends Error {}

function primitiveMultiply(nb1, nb2) {
    let possible = (Math.random() * 100) + 1;

    if (possible <= 20)
        return nb1 * nb2;

    throw new MultiplicationUnitFailure('Cannot Multiply.', possible);
}

function multiply(nb1, nb2) {
    for(;;) {
        try {
            return primitiveMultiply(5, 2);
        } catch (e) {

        }
    }
}

console.log(`5 * 2 = ${multiply(5, 2)}`);