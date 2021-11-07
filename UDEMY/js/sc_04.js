"use strict";

/*'adad'; // примитив
'sfdsd'.toLowerCase(); // оборот в объект

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]); */

const soldier = {
    health: 400,
    armor: 100,
    sayHi: function() {
        console.log("Hi!");
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

/* Устаревший формат

john.__proto__ = soldier;

console.log(john.armor); */

// Новый формат

//Object.setPrototypeOf(john, soldier);

john.sayHi();