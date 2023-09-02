// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 4 : Data Structures: Objects & Arrays
//
// Problem 4.3 : Write various functions:
//                  - A function 'arrayToList' that takes an array as parameter, and builds up a list object like
//                    the list example 'list'.
//                  - A function called 'listToArray' that produces an array from a list.
//                  - A function 'prepend', that takes a list and an element, and adds the element to the front
//                    of the list.
//                  - A function called 'nth' that takes a list and an index value, and returns the element at the
//                    given position. If there is no such element, the function returns undefined.
//
//
// Author : Giorgio Murad

const nth = (list, index) => {
    let value = -1;

    if (size(list) > 0) {
        if (index < size(list)) {

            let temp = list;
            for (let i = 0; i < index; i++)
                temp = temp.next;

            value = temp.value;
        }
    }

    return value;
}

const size = (list) => {
    let size = 0;

    if (list != null) {
        let temp = list;

        while (temp != null) {
            size++;

            temp = temp.next;
        }
    }

    return size;
}

const arrayToList = (array) => {
    let newList;

    for (let i = 0; i < array.length; i++)
        newList = append(array[i], newList);

    return newList;
}

const listToArray = (list) => {
    let i = 1;
    let newArr = [];
    let temp = {};


    newArr[0] = list.value;
    temp = list.next;
    while (temp != null) {
        newArr[i] = temp.value;

        i++;
        temp = temp.next;
    }

    return newArr;
}

const prepend = (value, list = {}) => {
    let element = {
        value: value,
        next: null
    }

    element.next = list;
    list = element;

    return list;
}

const append = (value, list) => {
    let obj = {
        value: value,
        next: null
    }

    if (list == null)
        return obj;

    else {
        let temp = list;

        while (temp.next != null) {

            temp = temp.next;
        }

        temp.next = obj;
        return list;
    }
}


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

console.log(nth(list, 3))