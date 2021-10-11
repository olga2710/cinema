const dateItems = document.querySelectorAll('.session__date-item');
const schemeSvg = document.querySelector('.scheme-svg');
const spanCounter = document.querySelector('.span-counter');
const burgerMenu = document.querySelector('.m-menu');
const mobileMenu = document.querySelector('.nav__menu');
let cost = 800;
let totalCost=0;


dateItems.forEach(item =>{
    item.addEventListener('click', ()=>{
        dateItems.forEach(item=>{
            item.classList.remove('session__date-item_active');
        });
        item.classList.add('session__date-item_active'); 

    })
});


schemeSvg.addEventListener('click', (ev)=>{

    if (!ev.target.classList.contains('booked')){
        ev.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalCost = totalSeats * cost;
        spanCounter.textContent = totalCost;
    }
    
});

burgerMenu.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('is-open');

})