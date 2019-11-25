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
function addWishList() {

    if(input.value === ''){
        titleInput.innerHTML = 'Write your wish';
        titleInput.classList.add('palpitation');
    }else{
        message.classList.add('hidden');
        inputWish.classList.add('hidden');
        wishSpace.innerHTML +=
            `<div class="wish-container">
                <p class="wish" id="1">${input.value}</p>
                <div class="done">✔</div>
                <div class="cancel">✖</div>
            </div>`;
        const done = document.querySelector('.done');
        done.addEventListener('click', taskDone);

        const remove = document.querySelector('.cancel');
        remove.addEventListener('click', removeTask);
    }

}



function taskDone() {
    const wish = document.querySelector('.wish');
    wish.classList.add('strikethrough');
    // al hacer click mandarla a un div de abajo
}

function removeTask() {
    const wishTask = document.querySelector('.wish-container');
    wishTask.classList.add('hidden');
    //    eliminar la tarea, desaparece del local también
}


writeWish.addEventListener('click', addNewWish);
newWish.addEventListener('click',addWishList);





//LOCAL STORE

//Poner un mensaje de que solo puedes poner 5 deseos




