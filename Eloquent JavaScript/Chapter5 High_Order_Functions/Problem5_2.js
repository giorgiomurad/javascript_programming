// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 5 : High-Order Functions
//
// Problem 5.2 : Write a high-order function loop that provides something like a for-loop
//               statement. It takes a value, a test function, an update function, and a
//               body function.
//               1. The function calls the test function for each iteration,
//               if the test function returns true, the function proceeds.
//               Otherwise, the program is terminated.
//               2. Then it calls the body function giving it the current value.
//               3. Finally, it calls the update function to return a new value, and starts
//               from the beginning.
//
//
// Author : Giorgio Murad

// Condition Function
const test = (n) => {

    return (n <= 10);
}

// Update Function
const update = (n) => {

    return n+1;
}



// Custom Loop Function
const myLoop = (value, condition, body, update) => {
    let temp = value;

    let count = 1;
    while (test(temp)) {
        body(`Value ${count} \t=\t${temp}`);

        temp = update(temp);
        count = update(count);
    }
}


myLoop(0, test, console.log, update);