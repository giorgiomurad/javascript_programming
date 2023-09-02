// Eloquent Javascript
// Chapter 8 : Exception Handling
// 
// Problem 8.2 : An object includes a box that is locked by default (locked = true).
//               The box object includes variables 'locked' and '_content', functions 'lock' and 'unlock',
//               and a function 'getContent' that returns the box's content if the box is unlocked.
//               Otherwise, an error is thrown.
//
//               Write a function called 'withBoxUnlocked' that takes a method as it's arguement, and executes
//               the method regardless of the error thrown in case the box was locked.
//
//               If the box is locked, allow the box to be unlocked, execute the method, and relock the box.
//               Otherwise, execute the method, and leave the box unlocked.
//
//
// Author : Giorgio Murad


const box = {
    locked: true,
    _content: [],
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    getContent() {
        if (this.locked) throw new Error("Locked!");

        return this._content;
    }
}

function withBoxUnlocked(method) {
        
    method;
}


try {

    withBoxUnlocked(box, box.getContent());
} catch (error) {
    box.unlock();

    withBoxUnlocked(box.getContent());

    box.lock();
}