import './styles/main.scss'
import { data  } from "./data.js";
import { orderBy } from 'lodash'

import Star from './assets/images/star.png'
import Play from './assets/images/play.png'


// custom checkbox
const checkbox = document.querySelector(".custom-checkbox");

checkbox.addEventListener("click", function () {
	checkbox.classList.toggle("checked")
});

// Scroll to Top
const scrollBtn = document.querySelector(".scrolltoTop");

window.addEventListener("scroll", () => {
	scrollBtn.classList.toggle("active", window.scrollY > 335)
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// modal

const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const signUp = document.querySelector(".sign_btn");


signUp.addEventListener("click", () => {
  modal.style.visibility = "visible";
});

closeModal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

//burger menu

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active")
});

window.addEventListener("resize", () => {
  if (window.matchMedia(`(min-width: 768px)`).matches) {
    menu.classList.remove("active");
  }
});

// slider Hero section
import img1 from './assets/images/1.png';
import img2 from './assets/images/2.png';
import img3 from './assets/images/3.png';

import img1t from './assets/images/Group1.png';
import img2t from './assets/images/Group2.png';
import img3t from './assets/images/Group3.png';

let img;
const filmSlider = () => {
  const filmTitle = document.querySelector(".film-title");
  const filmImg = document.querySelector(".hero .container");
	 
  let index = 1;

	
  setInterval(() => {
    index += 1;
    index > 3 ? index = 1 :  index + 1
		
		if (index == 1){
			filmImg.style.backgroundImage  = `url(${img1})` 
			filmTitle.src = `${img1t}`;

		} else if (index == 2){
			filmImg.style.backgroundImage  = `url(${img2})` 
			filmTitle.src = `${img2t}`;
			
		}  else if (index == 3){
			filmImg.style.backgroundImage  = `url(${img3})`
			filmTitle.src = `${img3t}`;
		}
		
		
  }, 4000);
}
filmSlider();

//link animation scroll

const links = document.querySelectorAll(".link");

const handlelink = (e) => {
  const { currentTarget } = e;
  const href = currentTarget.getAttribute("href");

  if (!href || !href.startsWith('#')|| href.length < 2) return;

	e.preventDefault();

  const element = document.querySelector(href);

  if (!element) return;

  const top = element.offsetTop + element.offsetHeight;

  window.scrollTo({ behavior: "smooth", top });
};

links.forEach((link) => {
  link.addEventListener("click", handlelink);
});

// get movie info


const movieType = data.map(( {type} ) => type);

const arrTypes = [... new Set(movieType)];

const getTemplate = (element) => {
return `
									<div class="card">
									<img class="card-img" src="${element.image}" alt="${element.title}">
										<div class="card_info">
											<div class="card_info-header">
												<div class="rating"><img src="${Star}" alt="star">
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
												<a class="btn-watch"><img  src="${Play}">
													<p>WATCH</p>
												</a>
											</div>
										</div>
									</div>
			`
}

const setItemTemplate = (type) => {
	data.forEach((movie) => {
			if (movie.type === type) {
			const element = document.querySelector(`.${type}`);
			if (!element) return;
			element.insertAdjacentHTML('beforeend', getTemplate(movie));
			}
	})
}

arrTypes.forEach(setItemTemplate);

//faqs

const filmByYear = orderBy(data, ['year'],['asc'])
console.log(filmByYear);