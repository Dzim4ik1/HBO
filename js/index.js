//// custom checkbox
//let checkbox = document.querySelector('.custom-checkbox');

//checkbox.addEventListener('click', function() {
//    if (checkbox.classList.contains('checked')){
//        checkbox.classList.remove('checked') 
//    } else {
//        checkbox.classList.add('checked') 
//    }
//})

// modal 
let closeModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let signUp = document.querySelector('.sign_btn');

signUp?.addEventListener('click', (e)=> {
	e.preventDefault;
	modal.style.visibility = 'visible'

})

closeModal?.addEventListener('click', (e)=> {
	modal.style.visibility = 'hidden'
})


