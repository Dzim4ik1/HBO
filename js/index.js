import { data  } from "./data.js";

// custom checkbox
const checkbox = document.querySelector(".custom-checkbox");

checkbox.addEventListener("click", function () {
  if (checkbox.classList.contains("checked")) {
    checkbox.classList.remove("checked");
  } else {
    checkbox.classList.add("checked");
  }
});

// Scroll to Top
const scrollBtn = document.querySelector(".scrolltoTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 335) {
    scrollBtn.classList.add("active");
  } else {
    scrollBtn.classList.remove("active");
  }
});

scrollBtn.addEventListener("click", (e) => {
	e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
  setInterval(() => {
    index += 1;
    if (index === 4) {
      index = 1;
    }
    filmImg.style.backgroundImage = `url(./assets/img/Main-slider-img/${index}.png)`;
    filmTitle.src = `./assets/img/Main-slider-img/Group${index}.png`;
  }, 4000);
}
filmSlider();

//link animation scroll

const links = document.querySelectorAll(".link");

const handlelink = (e) => {
  e.preventDefault();

  const { currentTarget } = e;

  const href = currentTarget.getAttribute("href");

  if (!href) return;

  const element = document.querySelector(href);

  if (!element) return;

  const top = element.offsetTop;

  window.scrollTo({ behavior: "smooth", top });
};

links.forEach((link) => {
  link.addEventListener("click", handlelink);
});

// get movie info




const getMovieType = (arr, type) => {
	const typeMovie = arr.filter(movie => movie.type === type);
	return typeMovie;
}


const getTemplate = (arr) => {
	const filmListCartoon = document.querySelector('.film_card-cartoons');
	const filmListMovie = document.querySelector('.film_card-movies');
	const filmListshow = document.querySelector('.film_card-shows');

	arr.forEach(element => {
		const showItem =
		`
									<div class="card">
									<img class="card-img" src="${element.image}" alt="${element.title}">
										<div class="card_info">
											<div class="card_info-header">
												<div class="rating"><img src="./assets/img/star.png" alt="star">
													<p>${element.rating}</p>
												</div>
												<div class="year">
													<p>${element.year}</p>
												</div>
											</div>
											<div class="card_info-main">
												<h1>${element.title}</h1>
												<p>${element.description}</p>
											</div>
											<div class="card_info-footer">
												<a class="btn-watch"><img src="./assets/img/play.png">
													<p>WATCH</p>
												</a>
											</div>
										</div>
									</div>
			`
			element.type === 'movie' ? filmListMovie.insertAdjacentHTML('beforeend', showItem) : false
		  element.type === 'show' ? filmListshow.insertAdjacentHTML('beforeend', showItem) : false
			element.type === 'cartoon' ? filmListCartoon.insertAdjacentHTML('beforeend', showItem) : false
		
})	
}

getTemplate(getMovieType(data, 'show'))
getTemplate(getMovieType(data, 'cartoon'))
getTemplate(getMovieType(data, 'movie'))