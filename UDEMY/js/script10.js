/*"use strict";

const str = "tesT";
const arr = [1, 2, 3];

console.log(arr[2]);
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

console.log("!-----!")

const log = "Howdy, bro!";

console.log(log.slice(7, 10));

console.log(log.substring(1, 5)); // Не поддерживает отриц. значения

console.log(log.substr(1, 8));

const num = 12.2;

console.log(Math.round(num));

const smth = "12.2px";

console.log(smth);
console.log(parseInt(smth));
console.log(parseFloat(smth));
console.log(typeof(smth));
console.log(typeof(num));*/

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('The data is recorded.');
        } else {
            console.log('Error...');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert ("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert ("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
        alert ("Вы киноман!");
    } else {
        alert ("Что-то пошло не так...");
    }
}

detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("Nothing...");
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
    }
}

writeYourGenres();