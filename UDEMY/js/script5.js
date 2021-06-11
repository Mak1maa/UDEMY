"use strict";

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);

///////////////////////////////////////////////////
// Символы не преобразуются автоматически в строки!

console.log(id1.description);

let user1 = {
    name: "Maxim"
};

let id22 = Symbol("id");

user1[id22] = 1;

console.log(user1[id22]);

///////////////////////////////////////////////////

let id = Symbol("id");
let user = {
    name: "Макс",
    age: 30,
    [id]: 123
};

for (let key in user) console.log(key); // name, age (свойства с ключом-символом нет среди перечисленных)

// хотя прямой доступ по символу работает
console.log( "Напрямую: " + user[id] );

// Символы, содержащиеся в реестре, называются глобальными символами. 
// Если вам нужен символ, доступный везде в коде – используйте глобальные символы.

let newId = Symbol.for("id");
let newIdAgain = Symbol.for("id");

console.log(newId == newIdAgain);

console.log(Symbol.keyFor(newId));

let a = 23,
    b = 4;

console.log(a | b);

///////////////////////////////////////////////////
// Пузырьковая сортировка

let arr = [5, 7, -4, 90, 3];

const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};

console.log(bubbleSort(arr));