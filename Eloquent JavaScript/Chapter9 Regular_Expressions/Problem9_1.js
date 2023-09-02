// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 9 : Regular Expressions
//
// Problem 9.1 : Use regular expressions in order to match different different patterns of string values.
//
//
// Author : Giorgio Murad

// 1 ->     car & cat
let exp1 = /ca./;
console.log(`1. \t${exp1.test('car') && exp1.test('cat')}`);


// 2 ->     pop & prop
let exp2 = /p.?op/;
console.log(`2. \t${exp2.test('pop') && exp2.test('prop')}`);


// 3 ->     ferret, ferry, & ferrari
let exp3 = /ferr\w/;
console.log(`3. \t${exp3.test('ferret') && exp3.test('ferry') && exp3.test('ferrari')}`);


// 4 ->     Any word ending in ious
let exp4 = /.ious/;
console.log(`4. \t${exp4.test('obvious') && exp4.test('conscious')}`);


// 5 ->     A whitespace character followed by a period, a comma, a colon, or a semicolon
let exp5 = /\s[.,:;]/;
console.log(`5. \t${exp5.test(' .') && exp5.test(' ,') && exp5.test(' :') && exp5.test(' ;')}`);


// 6 ->     A word longer than six characters
let exp6 = /\w{7,}/;
console.log(`6. \t${exp6.test('participle') && exp6.test('progress')}`);


// 7 ->     A word without the character 'e' or 'E'
let exp7 = /\b[^\WEe]+\b/g;
console.log(`7. \t${exp7.test('binary')}`);