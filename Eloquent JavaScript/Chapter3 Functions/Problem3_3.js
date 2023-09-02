// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 3 : Functions
//
// Problem 3.3 : Write a function that takes a string value as parameter, counts the number of B
//               characters contained in that string, and returns the number of Bs.
//
//
// Author : Giorgio Murad

function countBs(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++)
        if (string[i] == "B" || string[i] == "b")
            count++;

    return count;
}


let string = "BBBbbbB";
console.log(countBs(string));