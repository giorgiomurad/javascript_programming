// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 6 :  The Secret Life Of Objects
//
// Problem 6.2 : Write a class called Group that has 'add', 'delete', and 'has' methods with all
//               values being distinct.
//               The add method adds a value into the group if the value does not already exist in
//               the group.
//               The delete methods deletes the given value from the group.
//               And the has method checks if the value exists in the group.
//               Give the class a static method 'from' that takes an iterable object, and creates a group
//               containing all of its values.
//
//
// Author : Giorgio Murad

class Group {
    array;

    constructor(arr = []) {

        this.setArray(arr);
    }

    setArray(arr = []) {
        this.array = [];

        for (let i = 0; i < arr.length; i++)
            this.add(arr[i]);
    }

    add(value) {

        if (!this.has(value))
            this.array.push(value);

        else
            console.log(`${value} is already an element in the group.`);
    }

    delete(value) {

        if (this.has(value)) {
            let temp = [];

            for (let i of this.array)
                if (i !== value)
                    temp.push(value);

            this.array = temp;
        }
        else
            console.log(`${value} does not exist in the group.`);
    }

    has(value) {

        for (let i of this.array)
            if (i === value)
                return true;
    }

    static from(iterable) {
        let temp = [];

        let node = iterable.next();
        for (let i = 0; !node.done; i++) {
            temp[i] = node.value;

            node = iterable.next();
        }

        return new Group(temp);
    }
}


const numbers = [1, 2, 3];
const numbersIterator = numbers[Symbol.iterator]();

let grp = Group.from(numbersIterator);
console.log(grp.array);