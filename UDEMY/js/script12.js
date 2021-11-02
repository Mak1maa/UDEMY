'use strict';

//const obj = new Object();

const options = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: 'white',
        bg: 'red'
    }
};

console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

// delete options.name;

// console.log(options);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Св-во ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    //counter++;
}

console.log(counter);

let count = 0;

const table = {
    color: {
        colorOne: 'beige',
        colorTwo: 'white',
        filling: {
            wood: 'red wood'
        }
    },
    width: 200,
    height: 150
};

for (let key in table) {
    if (typeof(table[key]) === 'object') {
        for (let i in table[key]) {
            console.log(`Св-во ${i} имеет значение ${table[key][i]}`);
            count++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${table[key]}`);
        count++;
    }
    //count++;
}

console.log(count);