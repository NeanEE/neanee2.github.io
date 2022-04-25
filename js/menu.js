// SLIDER
// slider_container = document.getElementById("slider-container");
// left_arrow = document.getElementById("left-arrow");
// right_arrow = document.getElementById("right-arrow");
// slider_container = document.getElementById("slider-container");
// box_ads = document.getElementById("box-ads");
// img = document.getElementById("imagen-s")

// var imagenes = ['assets\ads\ads1.webp', 'assets\ads\ads2.webp', 'assets\ads\ads3.webp', 'assets\ads\ads4.webp'];
// var cont = 0;

// function slider(slider_container){
//     slider_container.addEventListener('click', e => {
//         let click = e.target;
//         if (click == left_arrow){
//             if (cont > 0){
//                 img.src = imagenes[cont - 1];
//                 cont--;
//             }
//             else{
//                 img.src = imagenes[imagenes.length - 1];
//                 cont = imagenes.length - 1;
//             }
//         }
//         else if(click == right_arrow){
//             if (cont < imagenes.length - 1){
//                 img.src = imagenes[cont + 1];
//                 cont++;
//             }
//             else{
//                 img.src = imagenes[0];
//                 cont = 0;
//             }
//         }
//     });
// }

// document.addEventListener("DOMContentLoaded",  ()=> {
//     slider(slider_container);
// })

// var imagenes = ['assets\ads\ads1.webp', 'assets\ads\ads2.webp', 'assets\ads\ads3.webp', 'assets\ads\ads4.webp'],
// cont = 0;

// function carrousel(contenedor){
//     contenedor.addEventListener('click', e => {
//         let atras = contenedor.querySelector('.atras'),
//         adelante = contenedor.querySelector('.adelante'),
//         img = contenedor.querySelector('img'),
//         tgt = e.target;
//         if(tgt == atras){
//             if(cont > 0){
//                 img.src = [imagenes - 1];
//                 cont--;
//             } else {
//                 img.src = imagenes[imagenes.length - 1];
//                 cont = imagenes.length - 1;
//             }
//         }
//         else if(tgt == adelante){
//             if(cont < imagenes.length - 1){
//                 img.src = [imagenes + 1];
//                 cont++;
//             } else {
//                 img.src = imagenes[0];
//                 cont = 0;
//             }
//         }
//     })
// }

// document.addEventListener("DOMContentLoaded", () => {
//     let contenedor = document.querySelector('.contenedor');
//     carrousel(contenedor);
// })









// let slidePosition = 0;
// const slides = document.getElementsByClassName('slider__item');
// const totalSlides = slides.length;

// document.getElementById('slider__button--next').addEventListener("click", function()
// {
//     moveToNextSlide();
//   });
// document.getElementById('slider__button--prev').addEventListener("click", function()
// {
//     moveToPrevSlide();
//   });

// function updateSlidePosition() {
//   for (let slide of slides) {
//     slide.classList.remove('slider__item--visible');
//     slide.classList.add('slider__item--hidden');
//   }

//   slides[slidePosition].classList.add('slider__item--visible');
// }

// function moveToNextSlide() {
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }

//   updateSlidePosition();
// }

// function moveToPrevSlide() {
//   if (slidePosition === 0) {
//     slidePosition = totalSlides - 1;
//   } else {
//     slidePosition--;
//   }

//   updateSlidePosition();
// }

let slidePosition = 0;
const slides = document.getElementsByClassName('slider__item');
const totalSlides = slides.length;
let next = document.getElementById('slider__button--next');
let prev = document.getElementById('slider__button--prev');

next.addEventListener("click", function()
{
    moveToNextSlide();
  });
prev.addEventListener("click", function()
{
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('slider__item--visible');
    slide.classList.add('slider__item--hidden');
  }

  slides[slidePosition].classList.add('slider__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}