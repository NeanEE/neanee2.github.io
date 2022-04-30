let slidePosition = 0;
const slides = document.getElementsByClassName('slider__item');
const totalSlides = slides.length;
let next = document.getElementById('slider__button--next');
let prev = document.getElementById('slider__button--prev');

next.addEventListener("click",()=>{
    moveToNextSlide();
  });
prev.addEventListener("click", function(){
    moveToPrevSlide();
  });

function updateSlidePosition(){
  for (let slide of slides)
  {
    slide.classList.remove('slider__item--visible');
    slide.classList.add('slider__item--hidden');  
  }
  slides[slidePosition].classList.add('slider__item--visible');
}

function moveToNextSlide(){
  clearInterval(timeToMove);
  if (slidePosition === totalSlides - 1)
  {
    slidePosition = 0;
  }
  else{
    slidePosition++;
  }
  updateSlidePosition();
  move();
}

function moveToPrevSlide(){
  clearInterval(timeToMove);
  if (slidePosition === 0)
  {
    slidePosition = totalSlides - 1;
  }
  else{
    slidePosition--;
  }
  updateSlidePosition();
  move();
}

function move(){
  timeToMove = setTimeout(() => {
    moveToNextSlide();
  }, 1500);
}

function stopover(){
  clearInterval(timeToMove);
}
function moveout(){
  move();
}

document.addEventListener("DOMContentLoaded",()=>{
    move();
});
