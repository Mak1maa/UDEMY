"use strict";

console.log("arr" + " - obj");

console.log(4 + " - obj");
console.log(4 + +"5"); // Унарный плюс, при +

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 + 2 * 2 !== "6"); 

const isChecked = false,
      isClose = true;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);