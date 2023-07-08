let list = document.querySelectorAll('.pro-container .pro');
list.forEach(pro =>{
    pro.addEventListener('click', function(event){
        if (event.target.classList.containts('material-symbols-outlined')){
            document.querySelector('#cart').appendChild(item);
        }
    })
})