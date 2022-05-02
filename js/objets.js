body_menu = document.getElementById("body-menu");

tcs_t_light = document.getElementById("tcs-t-light");
tcs_t_dark = document.getElementById("tcs-t-dark");

nav_bar = document.getElementById("objets-ms_items");
nav_bar_btn = document.getElementById("objets-btn_navbar");
objets_navbar_logo = document.getElementById("objets-navbar-logo");
objets_navbar = document.getElementById("objets-navbar");

// BOTONES PARA LOS MENUS
ms_cuenta = document.getElementById("ms-cuenta");
ms_micomercio = document.getElementById("ms-micomercio");
ms_contacto = document.getElementById("ms-contacto");
ms_configuracion = document.getElementById("ms-configuracion");

// SUB MENUS DE LA SIDEBAR
msil_cuenta = document.getElementById("msil-cuenta");
msil_micomercio = document.getElementById("msil-micomercio");
msil_contacto = document.getElementById("msil-contacto");
msil_configuracion = document.getElementById("msil-configuracion");

// SUBMENU DUPPED

d_mssm_perfil = document.getElementById("d-mssm-perfil");

// BOTON SHOW COLOR SELECTOR
teme_color_selector = document.getElementById("teme-color-selector");
color_selector = document.getElementById("color-selector");
tcs_c_btn = document.getElementById("tcs-c-btn");

// COLORES / COLORS
tcs_c_cian = document.getElementById("tcs-c-cian");
tcs_c_aqua = document.getElementById("tcs-c-aqua");
tcs_c_malaquita = document.getElementById("tcs-c-malaquita");
tcs_c_malva = document.getElementById("tcs-c-malva");
tcs_c_coral = document.getElementById("tcs-c-coral");
tcs_c_oro = document.getElementById("tcs-c-oro");

// POINT DE LOS COLORES (SELECTOR DE COLORES)
tcs_point_1 = document.getElementById("tcs-point-1");
tcs_point_2 = document.getElementById("tcs-point-2");
tcs_point_3 = document.getElementById("tcs-point-3");
tcs_point_4 = document.getElementById("tcs-point-4");
tcs_point_5 = document.getElementById("tcs-point-5");
tcs_point_6 = document.getElementById("tcs-point-6");





// INICIO



nav_bar_btn.addEventListener('click', () => {
    nav_bar.classList.toggle('active');
    objets_navbar_logo.classList.toggle("var--text-black");
    objets_navbar.classList.toggle("menu-sidebar--btn");
    nav_bar_btn.classList.toggle("var--text-black");
    nav_bar.classList.toggle("opacity--1");
})

// SUBMENU DUPPED

ms_cuenta.addEventListener('click', () => {
  d_mssm_perfil.classList.toggle("display--block2");
})

// BOTON SELECTOR DE COLORES
color_selector.addEventListener('click', () => {
    teme_color_selector.classList.toggle("show");
})

// SELECCIONAR COLOR PRINCIPAL
// LIGTH
tcs_t_light.addEventListener("click", ()=>{
    body_menu.classList.add("teme--white", "var--text-black");
    body_menu.classList.remove("teme--dark", "var--text");
    // objets_navbar_logo.add("var--text-black");
    tcs_t_light.classList.add("tcs--active");
    tcs_t_dark.classList.remove("tcs--active");
});
// DARK
tcs_t_dark.addEventListener("click", ()=>{
    body_menu.classList.add("teme--dark", "var--text");
    body_menu.classList.remove("var--text-black", "teme--white");
    tcs_t_dark.classList.add("tcs--active");
    tcs_t_light.classList.remove("tcs--active");
});

// SALIR
tcs_c_btn.addEventListener("click", ()=>{
  teme_color_selector.classList.toggle("show");
});

// SELECCIONAR EL COLOR SECUNDARIO
// CIAN
tcs_c_cian.addEventListener("click", ()=>{
    body_menu.classList.add("teme--btn-cian");
    body_menu.classList.remove("teme--btn-aqua", "teme--btn-malaquita", "teme--btn-malva", "teme--btn-coral", "teme--btn-oro");
    tcs_point_1.classList.add("tcs__point");
    tcs_point_2.classList.remove("tcs__point");
    tcs_point_3.classList.remove("tcs__point");
    tcs_point_4.classList.remove("tcs__point");
    tcs_point_5.classList.remove("tcs__point");
    tcs_point_6.classList.remove("tcs__point");
  });

// AQUA
tcs_c_aqua.addEventListener("click", ()=>{
    body_menu.classList.add("teme--btn-aqua");
    body_menu.classList.remove("teme--btn-cian", "teme--btn-malaquita", "teme--btn-malva", "teme--btn-coral", "teme--btn-oro");
    tcs_point_2.classList.add("tcs__point");
    tcs_point_1.classList.remove("tcs__point");
    tcs_point_3.classList.remove("tcs__point");
    tcs_point_4.classList.remove("tcs__point");
    tcs_point_5.classList.remove("tcs__point");
    tcs_point_6.classList.remove("tcs__point");
  });
// MALAQUITA
tcs_c_malaquita.addEventListener("click", ()=>{
    body_menu.classList.add("teme--btn-malaquita");
    body_menu.classList.remove("teme--btn-cian", "teme--btn-aqua", "teme--btn-malva", "teme--btn-coral", "teme--btn-oro");
    tcs_point_3.classList.add("tcs__point");
    tcs_point_1.classList.remove("tcs__point");
    tcs_point_2.classList.remove("tcs__point");
    tcs_point_4.classList.remove("tcs__point");
    tcs_point_5.classList.remove("tcs__point");
    tcs_point_6.classList.remove("tcs__point");
  });
// MALVA
tcs_c_malva.addEventListener("click", ()=>{
    body_menu.classList.add("teme--btn-malva");
    body_menu.classList.remove("teme--btn-cian", "teme--btn-aqua", "teme--btn-malaquita", "teme--btn-coral", "teme--btn-oro");
    tcs_point_4.classList.add("tcs__point");
    tcs_point_1.classList.remove("tcs__point");
    tcs_point_2.classList.remove("tcs__point");
    tcs_point_3.classList.remove("tcs__point");
    tcs_point_5.classList.remove("tcs__point");
    tcs_point_6.classList.remove("tcs__point");
  });
  // CORAL
  tcs_c_coral.addEventListener("click", ()=>{
    body_menu.classList.add("teme--btn-coral");
    body_menu.classList.remove("teme--btn-cian", "teme--btn-aqua", "teme--btn-malaquita", "teme--btn-malva", "teme--btn-oro");
    tcs_point_5.classList.add("tcs__point");
    tcs_point_1.classList.remove("tcs__point");
    tcs_point_2.classList.remove("tcs__point");
    tcs_point_3.classList.remove("tcs__point");
    tcs_point_4.classList.remove("tcs__point");
    tcs_point_6.classList.remove("tcs__point");
  }); 
// ORO
tcs_c_oro.addEventListener("click", ()=>{
  body_menu.classList.add("teme--btn-oro");
  body_menu.classList.remove("teme--btn-cian", "teme--btn-aqua", "teme--btn-malaquita", "teme--btn-malva", "teme--btn-coral");
  tcs_point_6.classList.add("tcs__point");
  tcs_point_1.classList.remove("tcs__point");
  tcs_point_2.classList.remove("tcs__point");
  tcs_point_3.classList.remove("tcs__point");
  tcs_point_4.classList.remove("tcs__point");
  tcs_point_5.classList.remove("tcs__point");
}); 








// if (body.classList.contain("teme--black") == true);
//     tcs_dark.classList.add()
// "reply" para el boton de volver al menu y al lado el boton de subir al inicio de la pagina
// "vertical_align_top", para la flecha de arriba