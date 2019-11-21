'use strict';

const dateText = document.querySelector('.date');

let date = new Date();
date.getDate()
{
    dateText.innerHTML= date;
    console.log('soy la fecha' + date);
}

