"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

console.log(box);
box.style.backgroundColor = '#444';
box.style.width = '720px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = "#f6f6f6";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div');
//const text = document.createTextNode('Here was I am');

div.classList.add('black');

//document.body.append(div);

wrapper.append(div); // конец

//wrapper.prepend(div); // начало

//hearts[0].before(div); // добавление до

//hearts[0].after(div); // добавление после

//circles[0].remove(); // удаление

hearts[0].replaceWith(circles[0]); // замена

//wrapper.appendChild(div);

//wrapper.insertBefore(div, hearts[1]); // вставка

//wrapper.removeChild(hearts[1]);

//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h3> Hello World </h3>";

//div.textContent = "Hi";

div.insertAdjacentHTML('beforebegin', '<h2> Hi </h2>');