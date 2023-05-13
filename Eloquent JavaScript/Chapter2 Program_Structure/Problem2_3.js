// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 2 : Program Structure
//
// Problem 2.3 : Write a program that creates an 8x8 string chessboard:
//                  # # # #
//                   # # # #
//                  # # # #
//                   # # # #
//                  # # # #
//                   # # # #
//                  # # # #
//                   # # # #
//
//
// Author : Giorgio Murad

let s = '';     // String variable
let r = 1;      // Integer that indicates each row


// Iterating 64 times
for (let i = 1; i <= 8*8; i++)
{
    // If i is even, a space is added to s
    // Otherwise, a sharp is added
    if (i % 2 == 0)
        s += ' ';
    else
        s += '#';


    // For every 8 iterations, a new line break is added to s
    if (i % 8 == 0)
    {
        s += '\n';

        // For every even row, a space is added to s
        r++;
        if (r % 2 == 0)
            s += ' ';
    }
}

// Displaying the final result
console.log(s);