"use strict";

let x = 5; alert(x++); // 5

console.log(typeof([] + false - null + true)); // NaN (number)

let b = 1; 
let a = b = 2; 
alert(a); // 2

console.log([] + 1 + 2); // 12

alert('1'[0]); // 1

console.log(2 && 1 && null && 0 && undefined); // null 
// && всегда запинается на лжи

console.log(!!(1 && 1) === (1 && 2)); // false

alert(null || 2 && 3 || 4); // 3
// || запинается на правде

const k = [1, 2, 3]; 
const c = [1, 2, 3]; 
console.log(k == c); // false

console.log(+"Infinity"); // Infinity number

console.log("Ёжик" > "яблоко"); // false

console.log(0 || "" || 2 || undefined || true || falsе);