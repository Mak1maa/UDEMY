"use strict";

// Циклы

let num = 50;

/*while (num <= 55) {
    console.log(num);
    num++;
}*/

console.log("---------------------");

/*do{
    console.log(num);
    num++;
}
while (num <= 55);*/

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        //break;
        console.log("-_-");
        continue;
    }
    console.log(i);
}