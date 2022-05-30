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

// BOTON DE HORARIOS
ptc_btn_hour = document.getElementById("ptc-btn-hour");
ptc_modal_hour = document.getElementById("ptc-modal-hour");

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
    slider_ads_text.textContent = `Usted esta a punto de salir de Decap y dirigirse a "${adsLink}" proporcionado por: "${adsName}"`
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

  // KEYUP EVENT "Escape" CLOSE MODALS

window.addEventListener("keyup", event => {
  if (slider_modal.classList.contains("slider__ads__modal__container--show") && event.keyCode === 27){
    slider_modal.classList.remove("slider__ads__modal__container--show");
  }
  if (ptc_modal_hour.classList.contains("ptc__c__hour__modal__container--expand") && event.keyCode === 27){
    ptc_modal_hour.classList.remove("ptc__c__hour__modal__container--expand");
  }
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
  pauseReanudeSlider();
});
function pauseReanudeSlider(){
  pause_play.classList.toggle("slider__pause__play");
  slider_svg_play.classList.toggle("slider__options__svg--none");
  slider_svg_pause.classList.toggle("slider__options__svg--none");
    // DETIENE EL MOVIMIENTO DEL SLIDE(EL INTERVALO DE moveToNextSlide)
  if(pause_play.classList.contains("slider__pause__play") == true){
    clearInterval(timeToMove);
  }
  if(pause_play.classList.contains("slider__pause__play") == false){
    move();
  }
}
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
        timeToMove = setTimeout(()=>{
        moveToNextSlide();
      }, 4000);
    }
    if (slidePosition == 1){
        timeToMove = setTimeout(()=>{
        moveToNextSlide();
      }, 4000);
    }
    if (slidePosition == 2){
        timeToMove = setTimeout(()=>{
        moveToNextSlide();
      }, 7000);
    }
    if (slidePosition == 3){
      timeToMove = setTimeout(()=>{
      moveToNextSlide();
      }, 4000);
    }
}





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
  // LLAMA A MOVE PARA QUE SE MUEVA EL SLIDER
  move();
});

  // CUANDO SE CARGUE LA PAGINA, (INCLUYE IMAGEN ADS1, IMAGEN PHARMACY, SOLO QUEDA SIN CARGAR EL FAVICON(1.3KB) LLAMA A CARGAR A LAS DEMAS IMAGENES ADS(2,3,4) SACANDOLE EL LOADING LAZY A LAS IMGS ADS)

window.addEventListener('load', ()=>{
  // alert("Carga Completa");
  img_lazy1.removeAttribute('loading','lazy');
  img_lazy2.removeAttribute('loading','lazy');
  img_lazy3.removeAttribute('loading','lazy');
});

  // EVENTO CLICK EN HORARIOS

  ptc_btn_hour.addEventListener("click", ()=>{
    ptc_modal_hour.classList.add("ptc__c__hour__modal__container--expand");
  });
