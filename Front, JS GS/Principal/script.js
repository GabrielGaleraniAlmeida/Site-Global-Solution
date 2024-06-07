let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('abrir-menu')
})
menu.addEventListener('click', function(){
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', function(){
    menu.classList.remove('abrir-menu')
})

