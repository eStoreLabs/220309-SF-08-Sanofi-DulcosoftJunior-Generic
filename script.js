
const hiddenContent = document.querySelector('.es-characteristic__toggleContainer')
const toggleBtn = document.querySelector('.es-characteristic__Btn')


toggleBtn.addEventListener('click', ()=>{
    hiddenContent.classList.toggle('es-characteristic__activeContainer');
    toggleBtn.classList.toggle('es-characteristic__activeBtn')
});


const ingrHiddenContent = document.querySelector('.es-ingr__toggleContainer')
const ingrToggleBtn = document.querySelector('.es-ingr__Btn')


ingrToggleBtn.addEventListener('click', ()=>{
    ingrHiddenContent.classList.toggle('es-ingr__activeContainer');
    ingrToggleBtn.classList.toggle('es-ingr__activeBtn')
});


const dozeHiddenContent = document.querySelector('.es-doze__toggleContainer')
const dozeToggleBtn = document.querySelector('.es-doze__Btn')


dozeToggleBtn.addEventListener('click', ()=>{
    dozeHiddenContent.classList.toggle('es-doze__activeContainer');
    dozeToggleBtn.classList.toggle('es-doze__activeBtn')
});