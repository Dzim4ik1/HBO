let checkbox = document.querySelector('.custom-checkbox');


checkbox.addEventListener('click', function() {
    if (checkbox.classList.contains('checked')){
        checkbox.classList.remove('checked') 
    } else {
        checkbox.classList.add('checked') 
    }
})

