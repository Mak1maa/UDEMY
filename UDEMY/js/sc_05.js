"use strict";

function hw() {
    console.log("Hello world!");
}

hw();

function sayHi() {
    console.log("Say hi...");
}

sayHi();

let arr = [5, 9, -4, 2, 90],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);

// 1
console.log(typeof(String(null)));

// 2
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';
console.log(typeof(fontSize));

// To Number
// 1
console.log(typeof(Number('4')));

// 2
console.log(typeof(+'5'));

// 3
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Howdy!", "");

// To boolean
// 0, '', null, undefined, NaN
// 1
let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

// 2
console.log(typeof(Boolean('4')));

// 3
console.log(typeof(!!'234'));