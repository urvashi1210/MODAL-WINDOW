'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');


/*const btnsOpenModal=document.querySelector('.show-modal');

console.log(btnsOpenModal);

//This is the disadvantage of querySelector() that if more than one tags have the same class name then it only selects the first one.

//Thus we use document.querySelectorAll('.classname);*/


const btnsOpenModal=document.querySelectorAll('.show-modal'); //Lists them all in kind of an array.


const openModal=function(){
    console.log('Button clicked');
        modal.classList.remove('hidden');//no dot before hidden because dot is only for selector and here we aren't selecting anything but simply passing classname
        overlay.classList.remove('hidden');
    }

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}

// CLASSLIST: It is a property that has various options like add,remove,etc.



//handling or removing classes is the main way of changing styles in websites



const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);


document.addEventListener('keydown',function(event){


    //keydown-when key is pressed
    //keyup-when key is released
    //keypress-when key is held

    console.log(event);//gives info about the key pressed(treats key like ab object and displays its properties)

    console.log(event.key);//gives the name of the key pressed out of all the information(like showing name property of all properties of the key)

    if(event.key==='Escape' && !modal.classList.contains('hidden')){
     closeModal(); 
    } 
})

