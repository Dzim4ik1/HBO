// custom checkbox
const checkbox = document.querySelector(".custom-checkbox");

checkbox.addEventListener("click", function () {
  if (checkbox.classList.contains("checked")) {
    checkbox.classList.remove("checked");
  } else {
    checkbox.classList.add("checked");
  }
});

// modal

const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const signUp = document.querySelector(".sign_btn");

signUp.addEventListener("click", (e) => {
  e.preventDefault;
  modal.style.visibility = "visible";
});

closeModal.addEventListener("click", (e) => {
  modal.style.visibility = "hidden";
});

//burger menu

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
  menu.classList.contains("active")
    ? menu.classList.remove("active")
    : menu.classList.add("active");
});

window.addEventListener("resize", (e) => {
  if (window.matchMedia(`(min-width: 768px)`).matches) {
    menu.classList.remove("active");
  }
});

// slider Hero section


function filmSlider() {

	const filmTitle = document.querySelector(".film-title");
	const filmImg = document.querySelector(".hero .container");

	let index = 1;
	setInterval(()=> {
		index += 1;
		if (index === 4){
			index = 1
		}
		filmImg.style.backgroundImage = `url(../../../assets/img/Main-slider-img/${index}.png)`;
		filmTitle.src = `../../../assets/img/Main-slider-img/Group${index}.png`;
	},4000)
}
filmSlider();


