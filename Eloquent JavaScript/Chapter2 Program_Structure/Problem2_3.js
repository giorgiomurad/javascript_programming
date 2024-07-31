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

let s = '';

// Row Loop
for(let r = 1; r <= 12; r++){
  // Column Loop
  for(let c = 1; c <= 6; c++){
    if(r % 2 === 0)
      s += ' #';
    else
      s += '# ';
  }
  s += '\n';
}

console.log(s);