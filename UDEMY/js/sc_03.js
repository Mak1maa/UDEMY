'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // Ссылка на obj

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7, 
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);

const add = {
    d: 12,
    e: 34
};

const clone = Object.assign({}, add); // Слияние объектов

clone.d = 203;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Копирование массива

newArray[1] = "new string";
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'life'],
      internet = [...video, ...blogs, 'vk', 'Telegram'];

console.log(internet);

function log(a, b, c) {
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
}

const num = [2, 5, 7];

log(...num); // ... - объединение\разворот данных

console.log();

const arr = ["a", "b"];
const newArr = [...arr];
console.log(newArr);

const newNewObj = {
    one: 1,
    two: 2
};

const newObj = {...newNewObj};
console.log(newObj);