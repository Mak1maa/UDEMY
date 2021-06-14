/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let answer1 = +prompt('Сколько фильмов вы уже посмотрели?', '');
const numberOfFilms = answer1;
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answer2 = prompt('Один из последних просмотренных фильмов?', ''),
      answer3 = prompt('На сколько оцените его?', ''),
      answer4 = prompt('Один из последних просмотренных фильмов?', ''),
      answer5 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answer2] = answer3;
personalMovieDB.movies[answer4] = answer5;

console.log(personalMovieDB);