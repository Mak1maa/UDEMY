"use strict";

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // foreach
// console.log(hearts); 
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div');
console.log(oneHeart);

const oneButton = document.querySelector('.button');
console.log(oneButton);