// Eloquent JavaScript: A Modern Introduction to Programming (3rd ed.)
// Chapter 6 :  The Secret Life Of Objects
//
// Problem 6.1 : Write a class 'Vec' that represents a vector.
//               The vector's properties are x and y, and includes three functions:
//                  - 'plus' that takes a vector, and returns a new vector containing the sum.
//                  - 'minus' that takes a vector, and returns a new vector containing the difference.
//                  - 'length' that returns the distance from (0, 0) to the vector.
//
//
// Author : Giorgio Murad

class Vec {

    constructor(x = 0, y = 0) {

        this.setX(x);
        this.setY(y);
    }

    setX(x) {

        this.x = x;
    }

    setY(y) {

        this.y = y;
    }

    plus(vector) {
        let x = this.x + vector.getX();
        let y = this.y + vector.getY();

        return new Vec(x, y);
    }

    minus(vector) {
        let x = this.x - vector.getX();
        let y = this.y - vector.getY();

        return new Vec(x, y);
    }

    length() {
        let distance;
        let x = Math.pow(this.x, 2);
        let y = Math.pow(this.y, 2);

        distance = Math.sqrt(x + y);
        return distance;
    }

    getX() {

        return this.x;
    }

    getY() {

        return this.y;
    }
}

let vec1 = new Vec(5, 5);
let vec2 = new Vec(4, 6);
let vec3 = vec1.minus(vec2);

console.log(vec3.getX());
console.log(vec3.getY());

console.log(vec3.length());