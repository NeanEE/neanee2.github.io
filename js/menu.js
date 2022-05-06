let slidePosition = 0;
const slides = document.getElementsByClassName("slider__item");
const totalSlides = slides.length;
// let slider_img_lazy = document.querySelectorAll(".slider__img__lazy");
let img_lazy1 = document.getElementById("img-lazy1");
let img_lazy2 = document.getElementById("img-lazy2");
let img_lazy3 = document.getElementById("img-lazy3");

let next = document.getElementById("slider-next-btn");
let prev = document.getElementById("slider-prev-btn");

let slider_click = document.getElementById("slider-click");
let slider_modal = document.getElementById("slider-modal");

let slider_ads_text = document.getElementById("sam-text");

let sam_btn_back = document.getElementById("sam-btn-back");
let sam_btn_enter = document.getElementById("sam-btn-enter");

let pause_play = document.getElementById("slider-play-pause-btn");
slider_svg_play = document.getElementById("slider-svg-play");
slider_svg_pause = document.getElementById("slider-svg-pause");

  // EVENTO CLICK EN ADS

slider_click.addEventListener("click", ()=>{
    if (slidePosition == 0){
      adsLink = "https://www.youtube.com/";
      adsName = "Youtube"
    }
    if (slidePosition == 1){
      adsLink = "https://www.colgate.com/es-ar";
      adsName = "Colgate"
    }  
    if (slidePosition == 2){
      adsLink = "https://discord.com/";
      adsName = "Discord"
    }
    if (slidePosition == 3){
      adsLink = "https://store.steampowered.com/?l=spanish"
      adsName = "Steam"
    }
    // if (slidePosition == 4){
      // slider_modal.href = "ACA VA UN LINK DIRECTO A LA PAGINA DENTRO DE DECAP"
    // }
    slider_ads_text.textContent = `Usted esta a punto de salir de Decap y dirigirse a "${adsLink}", proporcionado por: "${adsName}"`
    if (slidePosition <= 3){
    slider_modal.classList.add("slider__ads__modal__container--show");
    }
});

// function modificar(url,texto,destino){
//   document.getElementById("mienlace").innerHTML = texto;
//   document.getElementById("mienlace").href = url;
//   document.getElementById("mienlace").target = destino;
// } 

// EVENTO CLICK EN EL BTN BACK DEL MODAL DE ADS

sam_btn_back.addEventListener("click", ()=>{
  slider_modal.classList.remove("slider__ads__modal__container--show");
});

// EVENTO CLICK EN EL BTN ENTER DEL MODAL DE ADS > URL DEL ADS

sam_btn_enter.addEventListener("click", ()=>{
  sam_btn_enter.href = adsLink;
  // sam_btn_enter.setAttribute('href', adsLink);
});

// EVENTO CLICK NEXT

next.addEventListener("click",()=>{
  moveToNextSlide();
});

  // EVENTO CLICK PREV

prev.addEventListener("click", function(){
  moveToPrevSlide();
});

  // EVENTO PAUSE-PLAY 

pause_play.addEventListener("click", ()=>{
  pause_play.classList.toggle("slider__pause__play");
  slider_svg_play.classList.toggle("slider__options__svg--none");
  slider_svg_pause.classList.toggle("slider__options__svg--none");
  if(pause_play.classList.contains("slider__pause__play") == true){
    clearInterval(timeToMove);
    // slider_svg_play.classList.toggle("slider__options__svg--none");
  }
  if(pause_play.classList.contains("slider__pause__play") == false){
    move();
    // slider_svg_pause.classList.toggle("slider__options__svg--none");
  }
});

function updateSlidePosition(){
  for (let slide of slides)
  {
    slide.classList.remove('slider__item--visible');
    slide.classList.add('slider__item--hidden');  
  }
  slides[slidePosition].classList.add('slider__item--visible');
  // stTemp();  ´


  // clearInterval(stTemp500);
  // stCounter = 0;
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
  // clearInterval(timeToMove);
  updateSlidePosition();
  if(pause_play.classList.contains("slider__pause__play") == false){
    move();
  }
  // stTemp();
  // clearInterval(stTemp500);
  // stTemp();  
  // setInterval(stTemp);
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
  if(pause_play.classList.contains("slider__pause__play") == false){
    move();
  }
}
  // LA FUNCION MOVER EL SLIDER HACIA LA DERECHA, CON UN IF POR CADA ADS + EL TIEMPO QUE DURA CADA IMAGEN
function move(){
    if (slidePosition == 0){
        timeToMove = setTimeout(() => {
        moveToNextSlide();
      }, 4000);
    }
    if (slidePosition == 1){
        timeToMove = setTimeout(() => {
        moveToNextSlide();
      }, 4000);
    }
    if (slidePosition == 2){
        timeToMove = setTimeout(() => {
        moveToNextSlide();
      }, 7000);
    }
    if (slidePosition == 3){
      timeToMove = setTimeout(() => {
      moveToNextSlide();
      }, 4000);
    }
}
// sacarle el loading="lazy" con js despues de que termine de cargar la pagina con setatribute a todas las imagenes despues del 0 de ads





// function stopover(){
//   clearInterval(stTemp500);
//   clearInterval(timeToMove);
// }
// function moveout(){
//   if (stCounter == 0){
//     console.log("El contador esta en 0");
//     // setTimeout(move,1500);
//   }
//   if (stCounter == 1){
//     console.log("El contador esta en 1");
//     // setTimeout(move,1000);
//   }
//   if (stCounter == 2){
//     console.log("El contador esta en 2");
//     // setTimeout(move,500);
//   }
//   if (stCounter == 3){
//     console.log("El contador esta en 3");
//   }
//   setInterval(stTemp500);
//   move();
// }
// stTemp();
// Al CARGAR EL DOM, INICIA EL MOVIMIENTO DEL SLIDER
document.addEventListener("DOMContentLoaded",()=>{
  move();
});
// function lazy(){
//   slider_img_lazy.removeAttribute("loading","lazy");
// }
// lazy();
window.addEventListener('load', () => {
  // alert("Carga Completa");
  img_lazy1.removeAttribute('loading','lazy');
  img_lazy2.removeAttribute('loading','lazy');
  img_lazy3.removeAttribute('loading','lazy');
});
