// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 2 : Program Structure
//
// Problem 2.1 : Write a program, using a loop, prints the following:
// #
// ##
// ###
// ####
// #####
// ######
// #######
//
//
// Author : Giorgio Murad

// Initializing the string variable to it's default value
let s = '';

// First loop for the rows
for (let i = 0; i < 7; i++) {

    // Second loop for the colums
    for (let j = i + 1; j > 0; j--){

        // Adding a sharp character to 's'
        s += '#';
    }

    // Printing the value of 's' on a new line
    console.log(s);

    // Setting 's' back to its default value
    s = ''
}