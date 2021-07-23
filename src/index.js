import { forEach } from 'async';
import './assets/css/style.css';

let windowScroll = document.getElementsByClassName('fullpageScroll')[0];
let windowWidth = innerWidth;
let animatedEl = document.getElementById('bg-pink-sperm');

windowScroll.addEventListener('scroll', ()=>{
    let dist = Math.abs(document.getElementById('greet').getBoundingClientRect().x);

    if(dist == 0){
        animatedEl.style.opacity = 0;
        animatedEl.style.transform = 'translate(100px, 100px)';
    }
    
    if(dist == windowWidth){
        animatedEl.style.opacity = 1;
        animatedEl.style.transform = 'translate(0, 0)';
    }
    
});



let modalTitle = document.getElementById('modalTitle');
let modal = document.getElementById('modal');
let openModal = document.getElementById('openModal');

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    modalTitle.style.display = 'block';
})


let closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalTitle.style.display = 'none';
})




let dots = document.getElementsByClassName('dot');
for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', ()=>{
        showSlides(slideIndex = i+1);
    })
}

let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementsByClassName('prev')[0];
let next = document.getElementsByClassName('next')[0];

prev.addEventListener('click', () => {
    showSlides(slideIndex += -1);
})

next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
})

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}