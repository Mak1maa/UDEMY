"use strict";

let x = 10;

while (x != 1) {
    if (x % 2 == 0) {
        x = x / 2;
        console.log(x);
    } else {
        x = x * 3 + 1;
        console.log(x);
    }
}

let first = [];
let second = ['yes'];

first += 'yes';
console.log(first == second);
console.log(first);