'use strict';

const dateText = document.querySelector('.date');
const writeWish = document.querySelector('.footerList');
const message = document.querySelector('.defaultText');
const inputWish = document.querySelector('.newWish');
const newWish = document.querySelector('.addNewWish');
const input = document.querySelector('.newWish-input');
const wishSpace = document.querySelector('.listContainer');
const titleInput = document.querySelector('.newWish-title');


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
}



//Close input section and add wish to the list
function addWishList(index) {

    if(input.value === ''){
        titleInput.innerHTML = 'Write your wish';
        titleInput.classList.add('palpitation');
    }else{
        message.classList.add('hidden');
        inputWish.classList.add('hidden');
        wishSpace.innerHTML +=
            `<div class="wish-container">
                <p class="wish" id="wish_${index}">${input.value}</p>
                <div class="done" id="check_${index}">✔</div>
                <div class="cancel" id="remove_${index}">✖</div>
            </div>`;

        for (let doneWishes of document.querySelectorAll('.done')) {
            doneWishes.addEventListener('click', taskDone);
        }

        for (let cancelWishes of document.querySelectorAll('.cancel')) {
            cancelWishes.addEventListener('click', removeTask);
        }

        localStorage.setItem('wishes', input.value);
    }

}



function taskDone() {
    for (let wishes of document.querySelectorAll('.wish')) {
        wishes.classList.add('strikethrough');
    }


    // al hacer click mandarla a un div de abajo
}

function removeTask() {
    for (let wishTask of document.querySelectorAll('.wish-container')) {
        wishTask.classList.add('hidden');
    }

    //    eliminar la tarea, desaparece del local también
}


writeWish.addEventListener('click', addNewWish);
newWish.addEventListener('click',addWishList);



//LOCAL STORE







