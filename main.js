'use strict';

const dateText = document.querySelector('.date');
const writeWish = document.querySelector('.footerList');
const message = document.querySelector('.defaultText');
const inputWish = document.querySelector('.newWish');
const newWish = document.querySelector('.addNewWish');
const input = document.querySelector('.newWish-input');
const wishSpace = document.querySelector('.listContainer');
const titleInput = document.querySelector('.newWish-title');
let wishIndex = 1;


//get date
let date = new Date();
dateText.innerHTML = date.toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' });

window.onload = function () {
    let storedWishesString = localStorage.getItem('wishes');
    if (storedWishesString !== null) {
        let storedWishes = JSON.parse(storedWishesString);
        for(let storedWish of storedWishes){
            createWishDom(storedWish);
        }
    }
};

//Open input section and write new wish
function addNewWish(){
    if(inputWish.classList.contains('hidden')){
        inputWish.classList.remove('hidden');
    }
}

function saveLocalStorage() {
    let storedWishesString = localStorage.getItem('wishes');
    if (storedWishesString !== null) {
        let storedWishes = JSON.parse(storedWishesString);
        storedWishes.push(input.value);
        localStorage.setItem('wishes', JSON.stringify(storedWishes));
    } else {
        localStorage.setItem('wishes', JSON.stringify([input.value]));
    }
}

function createWishDom(wishText) {
    wishSpace.innerHTML =
        `<div class="wish-container" id="container_${wishIndex}">
                <p class="wish" id="wish_${wishIndex}">${wishText}</p>
                <div class="done" id="check_${wishIndex}">✔</div>
                <div class="cancel" id="remove_${wishIndex}">✖</div>
            </div>` + wishSpace.innerHTML;

    wishIndex++;

    for (let doneWishes of document.querySelectorAll('.done')) {
        doneWishes.addEventListener('click', taskDone);
    }

    for (let cancelWishes of document.querySelectorAll('.cancel')) {
        cancelWishes.addEventListener('click', removeTask);
    }
}

//Close input section and add wish to the list
function addWishList(event) {
    if(input.value === ''){
        titleInput.innerHTML = 'Write your wish';
        titleInput.classList.add('palpitation');
    }else{
        message.classList.add('hidden');
        inputWish.classList.add('hidden');
        createWishDom(input.value);
        saveLocalStorage();
        input.value = '';
    }
}



function taskDone(event) {
    let id = event.currentTarget.id.replace('check_', '');
    const wish = document.querySelector('#wish_' + id);
    wish.classList.add('strikethrough');

    //TODO al hacer click mandarla a un div de abajo
}

function removeTask(event) {
    let id = event.currentTarget.id.replace('remove_', '');
    const wish = document.querySelector('#wish_' + id);
    const wishText = wish.innerHTML;
    let storedWishesString = localStorage.getItem('wishes');
    if (storedWishesString !== null) {
        let storedWishes = JSON.parse(storedWishesString);
        storedWishes = storedWishes.filter(function(item) {
            return item !== wishText
        });
        localStorage.setItem('wishes', JSON.stringify(storedWishes));
    }
    event.currentTarget.parentElement.remove();
}


writeWish.addEventListener('click', addNewWish);
newWish.addEventListener('click', addWishList);

