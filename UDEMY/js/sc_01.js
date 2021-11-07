'use strict';

// function first() {
//     // Do smth
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

function learnJS(lang, callback) {
    console.log(`I'm learn: ${lang}`);
    callback();
}

function done(){
    console.log("I'm finish this lesson");
}

learnJS('JS', done);

////

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

console.log(Object.keys(options));

const {border, bg} = options.colors; // Деструктулизация

console.log(bg);

// console.log(options.colors);

// delete options.name;

// console.log(options);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) { 
            console.log(`Св-во ${i} имеет значение ${options[key][i]}`);
            //counter++;
        }
    } else {
        console.log(`Св-во ${key} имеет значение ${options[key]}`);
        //counter++;
    }
}

console.log(counter);