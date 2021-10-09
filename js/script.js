const dateItems = document.querySelectorAll('.session__date-item');

dateItems.forEach(item =>{
    item.addEventListener('click', ()=>{
        dateItems.forEach(item=>{
            item.classList.remove('session__date-item_active');
        });
        item.classList.add('session__date-item_active');

    })
})