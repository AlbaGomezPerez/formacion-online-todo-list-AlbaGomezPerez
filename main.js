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
writeWish.addEventListener('click', addNewWish);


//Close input section and add wish to the list
function addWishList() {

    if(input.value === ''){
        titleInput.innerHTML = 'Write your wish';
        titleInput.classList.add('palpitation');
    }else{
        message.classList.add('hidden');
        inputWish.classList.add('hidden');
        wishSpace.innerHTML += `<p class="wish" value="1" id="1">${input.value}</p>`;
    }
}

newWish.addEventListener('click',addWishList);

//FUNCTION marcar tarea hecha:
//    al hacer click mandarla a un div de abajo y ponerla tachada (cambiar clase)

//FUNCTION eliminar tarea:
//    poner una x en la parte derecha o algo que ponga eliminar y al hacer click ahí,
//    eliminar la tarea, desaparece del local también




