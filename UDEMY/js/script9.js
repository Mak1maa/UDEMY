'use strict';

let num = 20; // Глобальная переменная

function showFirstMessage(text) {
    console.log(text);
    let num = 10; // Локальная переменная
    console.log("Локальная переменная:", num);
}

showFirstMessage("Howdy!");
console.log("Глобальная переменная:", num);

function calculator(a, b) {
    let c = 1;
    for (let i = 0; i < b; i++) {
        c *= a;
    }
    return c;
    //console.log("Smth..."); // Unreachable - не можем получить, мёртвый код.
}

console.log(calculator(2, 5));
console.log(calculator(2, 9));

function ret() { // function declaration
    let num = 100;

    // Какой-то большой код

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Классификация ф-й
/* function declaration - сущ до того как код запуститься
function expression - в переменной ф-я
*/

const logger = function() {
    console.log("Hey, bro!");
};

logger();

const c1 = (x, y) => x + y; // Сокращённая стрелочная ф-я
const c2 = (x, y) => {
    console.log('1');
    return x - y;
}; 
// const c = a => a + b;

console.log(c1(5, 6));
console.log(c2(5, 6));