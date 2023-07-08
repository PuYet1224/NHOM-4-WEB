const open = document.getElementById('open');
const menu1 = document.getElementById('menu');
const close = document.getElementById('close');

if(open){
    open.addEventListener('click', ()=>{
        menu1.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        menu1.classList.remove('active')
    })
}
