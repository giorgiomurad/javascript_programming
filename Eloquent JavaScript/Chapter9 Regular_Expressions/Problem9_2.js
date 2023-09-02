// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 9 : Regular Expressions
//
// Problem 9.2 : Imagine a story that is written using single quotations that mark pieces of dialogue.
//               The program should replace all single quotes except the single quuotes used in contradictions
//               such as aren't.
//
//
// Author : Giorgio Murad

// Initializing the string value
let text = '\'Hello JavaScript\' and \'Welcome to Programming\'. \'This isn\'t Java\' so \'We only have 1\'.';

// Splitting the string into a string array, and assigning it to the variable
let arr = text.split(' ');

// Going over every element in the array to change every single quote to a double quote
for(let i = 0; i < arr.length; i++) {
    let regExp1 = /'.+/;
    let regExp2 = /.+'/;

    // Condition if the single quote is used in a condradiction, it isn't affected
    let cond = /\w+'\w+/;
    if(regExp1.test(arr[i]) || regExp2.test(arr[i]))
        if(!cond.test(arr[i]))
            arr[i] = arr[i].replace('\'', '\"');
}

// Updating the text string
text = '';
for(let j of arr) {
    text = text.concat(j + ' ');
}

console.log(text);