'use strict';

const dateText = document.querySelector('.date');
const writeWish = document.querySelector('.footerList');
const message = document.querySelector('.defaultText');
const inputWish = document.querySelector('.newWish');
const newWish = document.querySelector('.addNewWish');
const input = document.querySelector('.newWish-input');
const wishSpace = document.querySelector('.listContainer');


//get date
let date = new Date();
date.getDate()
{
    dateText.innerHTML= date;
}


//Open input section and write new wish
function addNewWish(){
    if(inputWish.classList.contains('hidden')){
        inputWish.classList.remove('hidden');
    }
    console.log('soy un deseo');
}
writeWish.addEventListener('click', addNewWish);


//Close input section and add wish to the list
function addWishList() {
    console.log('estoy deseando');

    if(input.value === ''){
        console.log('pon un deseo');
    }else{
        message.classList.add('hidden');
        inputWish.classList.add('hidden');
        wishSpace.innerHTML = `<input class="item-amount" type="checkbox" value="1" id="1">hola</input>`;
    }



    //meter nuevo deseo en el div
}

newWish.addEventListener('click',addWishList);


