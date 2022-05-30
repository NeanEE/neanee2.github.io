body_menu = document.getElementById("body-menu");

tcs_t_light = document.getElementById("tcs-t-light");
tcs_t_dark = document.getElementById("tcs-t-dark");

nav_bar = document.getElementById("objets-ms_items");
nav_bar_btn = document.getElementById("objets-btn_navbar");
objets_navbar_logo = document.getElementById("objets-navbar-logo");
objets_navbar = document.getElementById("objets-navbar");

  // MODAL BACK BTN OUT
mssm_out_btn = document.getElementById("mssm-out-btn");
mssm_out_modal = document.getElementById("mssm-out-modal");

  // FLOAT BTNS
float_btn_search = document.getElementById("float-btn-search");
float_input_search = document.getElementById("float-input-search");

float_notifications_box = document.getElementById("float-notifications-box");
float_btn_notifications = document.getElementById("float-btn-notifications");

  // NOTIFICATIONS MODAL
ms_ntf_back_btn = document.getElementById("ms-notifications-back-btn");

  // BOTONES PARA LOS MENUS
ms_account = document.getElementById("ms-account");
ms_sm_account = document.getElementById("ms-sm-account");
ms_my_market = document.getElementById("ms-my-market");
ms_sm_my_market = document.getElementById("ms-sm-my-market");
ms_config = document.getElementById("ms-config");
ms_sm_config = document.getElementById("ms-sm-config");
ms_notifications = document.getElementById("ms-notifications");

  // CHANGE RIG LEFT BTN
ms_items_rig_lef_btn = document.getElementById("ms-items-rig-lef-btn");

ms_sm_li_box_profile = document.getElementById("ms-sm-li-box-profile");
ms_sm_li_box_my_cv= document.getElementById("ms-sm-li-box-my-cv");
ms_sm_li_box_my_market = document.getElementById("ms-sm-li-box-my-market");
ms_sm_li_box_upgrades = document.getElementById("ms-sm-li-box-upgrades");
ms_sm_li_box_register = document.getElementById("ms-sm-li-box-register");
ms_sm_li_box_notifications = document.getElementById("ms-sm-li-box-notifications");
ms_sm_li_box_teme = document.getElementById("ms-sm-li-box-teme");
ms_sm_li_box_device = document.getElementById("ms-sm-li-box-device");
ms_sm_li_box_out = document.getElementById("ms-sm-li-box-out");


  // BOTON SHOW COLOR SELECTOR
teme_color_selector = document.getElementById("teme-color-selector");
ms_sm_li_box_teme = document.getElementById("ms-sm-li-box-teme");
tcs_c_btn = document.getElementById("tcs-c-btn");
tcs_c_btn_2 = document.getElementById("tcs-c-btn-2");

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

  // DEVICE MODAL
mssm_device_selector_modal = document.getElementById("mssm-device-selector-modal");
ms_device_selector_close_modal = document.getElementById("ms-device-selector-close-modal");

  // DEVICE SELECTOR BTNS 
msds_mobile_btn = document.getElementById("msds-mobile-btn");
msds_tablet_btn = document.getElementById("msds-tablet-btn");
msds_laptop_btn = document.getElementById("msds-laptop-btn");
msds_pc_btn = document.getElementById("msds-pc-btn");
  // AUTOMATIC
ms_ds_auto_box = document.getElementById("ms-ds-auto-box");
ms_ds_auto_svg = document.getElementById("ms-ds-auto-svg");
  // RESET
ms_items_reset_btn = document.getElementById("ms-items-reset-btn");
  // MOBILE
ms_ds_act_dis_mobile = document.getElementById("ms-ds-act-dis-mobile");
ms_ds_icon_mobile = document.getElementById("ms-ds-icon-mobile");
  // TABLET
ms_ds_act_dis_tablet = document.getElementById("ms-ds-act-dis-tablet");
ms_ds_icon_tablet = document.getElementById("ms-ds-icon-tablet");
  // LAPTOP
ms_ds_act_dis_laptop = document.getElementById("ms-ds-act-dis-laptop");
ms_ds_icon_laptop = document.getElementById("ms-ds-icon-laptop");
  // PC
ms_ds_act_dis_pc = document.getElementById("ms-ds-act-dis-pc");
ms_ds_icon_pc = document.getElementById("ms-ds-icon-pc");

ms_ds_icon_svg_mobile = document.getElementById("ms-ds-icon-svg-mobile");
ms_ds_icon_svg_tablet = document.getElementById("ms-ds-icon-svg-tablet");
ms_ds_icon_svg_laptop = document.getElementById("ms-ds-icon-svg-laptop");
ms_ds_icon_svg_pc = document.getElementById("ms-ds-icon-svg-pc");




actualDeviceBlocker = "none";
// deviceBlockerStatus = "Disable"
// deviceBlockerStatus = "Active"

// INICIO

// document.addEventListener("DOMContentLoaded",()=>{
//   DomReady();
// });

  // DEVICE DETECTOR

// function windowSizeResize(){
//   if(actualDeviceBlocker == "none"){

//     if(window.innerWidth >= 1 && window.innerWidth <= 437){
//       windowSize = "437o-"
//       actualDevice = "Mobile"
//     }
//     if(window.innerWidth >= 438 && window.innerWidth <= 685){
//       windowSize = "685o-"
//       actualDevice = "Tablet"
//     }
//     if(window.innerWidth >= 686 && window.innerWidth <= 956){
//       windowSize = "956o-"
//       actualDevice = "Laptop"
//     }
//     if(window.innerWidth >= 957){
//       windowSize = "957o+"
//       actualDevice = "Pc"
//     }
//     return windowSize, actualDevice;
//   }
// }

windowSizeResize();

console.log(actualDevice);

  // WINDOWS RESIZE
window.addEventListener("resize", ()=>{
  resizeEvent();
});


// REMOVE HOVER AND FOCUS, ADD CLICK/TOUCH FOR SIDEBAR EXPAND SUBMENU ALL DEVICES

if(actualDevice == "Tablet"){
  tabletNavbarActive();
}

if(actualDevice == "Mobile"){
  mobileNavbarActive();
}

if(actualDevice == "Laptop"){
  laptopNavbarActive();
}

if(actualDevice == "Pc"){
  pcNavbarActive();
}

  // KEYUP EVENT "Escape"

window.addEventListener("keyup", event => {
  if (mssm_out_modal.classList.contains("ms__sm__out__modal__container--flex") && event.keyCode === 27){
    mssm_out_modal.classList.toggle("ms__sm__out__modal__container--flex");
  }
  if(teme_color_selector.classList.contains("show") && event.keyCode === 27){
    teme_color_selector.classList.toggle("show");
  }
  if(mssm_device_selector_modal.classList.contains("ms__device-selector__container--expand") && event.keyCode === 27){
    mssm_device_selector_modal.classList.toggle("ms__device-selector__container--expand");
  }
});

  // ACTIVE MODALS
float_btn_search.addEventListener("click", ()=>{
  float_input_search.classList.toggle("ms__float__search--expand");
});

float_btn_notifications.addEventListener("click", ()=>{
  float_notifications_box.classList.toggle("ms__notifications__container--expand");
})

  // NTF MODAL
  ms_ntf_back_btn.addEventListener("click", ()=>{
    float_notifications_box.classList.remove("ms__notifications__container--expand");
  });
  
// BTN EXPAND MOBILE MENU
nav_bar_btn.addEventListener('click', ()=>{
  toggleNavbar()
})

// MODAL BACK BTN OUT
mssm_out_btn.addEventListener("click", ()=>{
  mssm_out_modal.classList.toggle("ms__sm__out__modal__container--flex");
});

// MODAL DEVICE BTN
ms_sm_li_box_out.addEventListener("click", ()=>{
  mssm_out_modal.classList.toggle("ms__sm__out__modal__container--flex");
});

// MODAL OUT BTN
ms_sm_li_box_out.addEventListener("click", ()=>{
  mssm_out_modal.classList.toggle("ms__sm__out__modal__container--flex");
});

  // CHANGE NAVBAR RIGHT AND LEFT BTN

ms_items_rig_lef_btn.addEventListener("click", ()=>{
  // CHANGE NAVBAR RIGHT TO LEFT BTN

  if(ms_items_rig_lef_btn.classList.contains("ms-items__right-left__btn--left") == false){
      changeRigthToLeftNavbar();
      changeRightToLeftSubNavBar();
  }

  // CHANGE NAVBAR LEFT TO RIGHT BTN

  else if(ms_items_rig_lef_btn.classList.contains("ms-items__right-left__btn--left") == true){
    changeLeftToRightNavbar();
    changeLeftToRightSubNavBar();
  } 
});

  // RESET DEVICE (CHANGE TO AUTOMATIC) BTN
ms_items_reset_btn.addEventListener("click", ()=>{
  BlockerAutomaticRemoveRest();
  resizeEvent();
});


  
// COLOR SELECTOR EXPAND BTN
ms_sm_li_box_teme.addEventListener('click', ()=>{
    teme_color_selector.classList.toggle("show");
})

// COLOR SELECTOR OUT BTN
tcs_c_btn.addEventListener("click", ()=>{
  teme_color_selector.classList.toggle("show");
});
tcs_c_btn_2.addEventListener("click", ()=>{
  teme_color_selector.classList.toggle("show");
});

// SELECT TEME COLOR
// LIGTH
tcs_t_light.addEventListener("click", ()=>{
  ChangeTemeColorDark();
});

// DARK
tcs_t_dark.addEventListener("click", ()=>{
  ChangeTemeColorLigth();
});

// SELECCIONAR EL COLOR SECUNDARIO

// CIAN
tcs_c_cian.addEventListener("click", ()=>{
  changeBtnColorCian();
});

// AQUA
tcs_c_aqua.addEventListener("click", ()=>{
  changeBtnColorAqua();
});

    // MALAQUITA
tcs_c_malaquita.addEventListener("click", ()=>{
  changeBtnColorMalaquita();
});

// MALVA
tcs_c_malva.addEventListener("click", ()=>{
  changeBtnColorMalva();
});

  // CORAL
tcs_c_coral.addEventListener("click", ()=>{
  changeBtnColorCoral();
}); 

// ORO
tcs_c_oro.addEventListener("click", ()=>{
  changeBtnColorOro();
});

  // DEVICE MODAL EXPAND BTN

ms_sm_li_box_device.addEventListener("click", ()=>{
  mssm_device_selector_modal.classList.toggle("ms__device-selector__container--expand");
});  

  // DEVICE MODAL CLOSE BTN

ms_device_selector_close_modal.addEventListener("click", ()=>{
  mssm_device_selector_modal.classList.remove("ms__device-selector__container--expand");
})
    
  // ACTUAL DEVICE MANUAL SELECTOR

  // MOBILE

msds_mobile_btn.addEventListener("click", ()=>{
  actualDevice = "Mobile"
  // actualDeviceBlocker = "BMobile"
  BlockerMobileRemoveRest();
  console.log(actualDevice);
});

  // TABLET

msds_tablet_btn.addEventListener("click", ()=>{
  actualDevice = "Tablet"
  // actualDeviceBlocker = "BTablet"
  BlockerTabletRemoveRest();
  console.log(actualDevice);
});

    // LAPTOP

msds_laptop_btn.addEventListener("click", ()=>{
  actualDevice = "Laptop"
  // actualDeviceBlocker = "BLaptop"
  BlockerLaptopRemoveRest();
  console.log(actualDevice);
});

    // PC

msds_pc_btn.addEventListener("click", ()=>{
  actualDevice = "Pc"
  // actualDeviceBlocker = "BPc"
  BlockerPcRemoveRest();
  console.log(actualDevice);
});

  // AUTOMATIC

ms_ds_auto_box.addEventListener("click", ()=>{
  // actualDeviceBlocker = "none"
  BlockerAutomaticRemoveRest();
  windowSizeResize();
  console.log(actualDevice);
});






// Funcion para resetear el js, asi si alguien por ej bloquea el dispositivo en pc y despues lo pone innerWidth Mobile y ya no puede volver atras, ya tiene el boton para solucionarlo (y tambien otras cosas mas puede tener la funcion resetall())

// FUNCTIONS

function resizeEvent(){
  windowSizeResize();
  
  console.log(actualDevice);
  
  if(actualDevice == "Laptop" && nav_bar.classList.contains('active') == true){
    toggleNavbar();
  }
  if(actualDevice == "Mobile"){
    mobileNavbarActive();
  }
  if(actualDevice == "Tablet"){
    tabletNavbarActive();
  }
  if(actualDevice == "Laptop"){
    laptopNavbarActive();
  }
  if(actualDevice == "Pc"){
    pcNavbarActive()
  }
}

function windowSizeResize(){
  if(actualDeviceBlocker == "none"){

    if(window.innerWidth >= 1 && window.innerWidth <= 437){
      windowSize = "437o-"
      actualDevice = "Mobile"
    }
    if(window.innerWidth >= 438 && window.innerWidth <= 685){
      windowSize = "685o-"
      actualDevice = "Tablet"
    }
    if(window.innerWidth >= 686 && window.innerWidth <= 956){
      windowSize = "956o-"
      actualDevice = "Laptop"
    }
    if(window.innerWidth >= 957){
      windowSize = "957o+"
      actualDevice = "Pc"
    }
    return windowSize, actualDevice;
  }
}

function toggleNavbar(){
  nav_bar.classList.toggle('active');
  objets_navbar.classList.toggle("menu-sidebar--btn");
  if(actualDevice == "Mobile" || actualDevice == "Tablet"){
    float_input_search.classList.toggle("ms__float__search--expand");
  }
  if(actualDevice == "Laptop" || actualDevice == "Pc"){
    float_input_search.classList.remove("ms__float__search--expand");
  }
  if(body_menu.classList.contains("teme--white") == false){
    objets_navbar_logo.classList.toggle("var--text-black");
    nav_bar_btn.classList.toggle("var--fill-black");
  }
}

function changeRigthToLeftNavbar(){
  nav_bar.classList.add("m-s__items--left");
  float_btn_notifications.classList.add("ms-items__float-btn--left");

  ms_account.classList.add("ms-items__list--ghost--aifs");
  ms_my_market.classList.add("ms-items__list--ghost--aifs");
  ms_config.classList.add("ms-items__list--ghost--aifs");

  ms_sm_account.classList.add("ms__sm__container--left");
  ms_sm_my_market.classList.add("ms__sm__container--left");
  ms_sm_config.classList.add("ms__sm__container--left");

  ms_items_rig_lef_btn.classList.add("ms-items__right-left__btn--left");

  ms_items_reset_btn.classList.add("ms__items__reset__btn--left");
}

function changeRightToLeftSubNavBar(){
  ms_sm_li_box_profile.classList.add("ms__sm__li-box--left");
  ms_sm_li_box_my_cv.classList.add("ms__sm__li-box--left");
  ms_sm_li_box_my_market.classList.add("ms__sm__li-box--left");
  ms_sm_li_box_upgrades.classList.add("ms__sm__li-box--left");
  ms_sm_li_box_register.classList.add("ms__sm__li-box--left");
  ms_sm_li_box_notifications.classList.add("ms__sm__li-box--left");
  ms_sm_li_box_teme.classList.add("ms__sm__li-box--left");
  ms_sm_li_box_device.classList.add("ms__sm__li-box--left");
  ms_sm_li_box_out.classList.add("ms__sm__li-box--left");
}

function changeLeftToRightNavbar(){
  nav_bar.classList.toggle("m-s__items--left");
  float_btn_notifications.classList.toggle("ms-items__float-btn--left");

  ms_account.classList.toggle("ms-items__list--ghost--aifs");
  ms_my_market.classList.toggle("ms-items__list--ghost--aifs");
  ms_config.classList.toggle("ms-items__list--ghost--aifs");

  ms_sm_account.classList.toggle("ms__sm__container--left");
  ms_sm_my_market.classList.toggle("ms__sm__container--left");
  ms_sm_config.classList.toggle("ms__sm__container--left");

  ms_items_rig_lef_btn.classList.toggle("ms-items__right-left__btn--left");
  
  ms_items_reset_btn.classList.toggle("ms__items__reset__btn--left");
}

function changeLeftToRightSubNavBar(){
  ms_sm_li_box_profile.classList.toggle("ms__sm__li-box--left");
  ms_sm_li_box_my_cv.classList.toggle("ms__sm__li-box--left");
  ms_sm_li_box_my_market.classList.toggle("ms__sm__li-box--left");
  ms_sm_li_box_upgrades.classList.toggle("ms__sm__li-box--left");
  ms_sm_li_box_register.classList.toggle("ms__sm__li-box--left");
  ms_sm_li_box_notifications.classList.toggle("ms__sm__li-box--left");
  ms_sm_li_box_teme.classList.toggle("ms__sm__li-box--left");
  ms_sm_li_box_device.classList.toggle("ms__sm__li-box--left");
  ms_sm_li_box_out.classList.remove("ms__sm__li-box--left");
}

function changeBtnColorCian(){
  body_menu.classList.add("teme--btn-cian");
  body_menu.classList.remove("teme--btn-aqua", "teme--btn-malaquita", "teme--btn-malva", "teme--btn-coral", "teme--btn-oro");
  tcs_point_1.classList.add("tcs__point");
  tcs_point_2.classList.remove("tcs__point");
  tcs_point_3.classList.remove("tcs__point");
  tcs_point_4.classList.remove("tcs__point");
  tcs_point_5.classList.remove("tcs__point");
  tcs_point_6.classList.remove("tcs__point");
}

function changeBtnColorAqua(){
  body_menu.classList.add("teme--btn-aqua");
  body_menu.classList.remove("teme--btn-cian", "teme--btn-malaquita", "teme--btn-malva", "teme--btn-coral", "teme--btn-oro");
  tcs_point_2.classList.add("tcs__point");
  tcs_point_1.classList.remove("tcs__point");
  tcs_point_3.classList.remove("tcs__point");
  tcs_point_4.classList.remove("tcs__point");
  tcs_point_5.classList.remove("tcs__point");
  tcs_point_6.classList.remove("tcs__point");
}

function changeBtnColorMalaquita(){
  body_menu.classList.add("teme--btn-malaquita");
  body_menu.classList.remove("teme--btn-cian", "teme--btn-aqua", "teme--btn-malva", "teme--btn-coral", "teme--btn-oro");
  tcs_point_3.classList.add("tcs__point");
  tcs_point_1.classList.remove("tcs__point");
  tcs_point_2.classList.remove("tcs__point");
  tcs_point_4.classList.remove("tcs__point");
  tcs_point_5.classList.remove("tcs__point");
  tcs_point_6.classList.remove("tcs__point");
}

function changeBtnColorMalva(){
  body_menu.classList.add("teme--btn-malva");
  body_menu.classList.remove("teme--btn-cian", "teme--btn-aqua", "teme--btn-malaquita", "teme--btn-coral", "teme--btn-oro");
  tcs_point_4.classList.add("tcs__point");
  tcs_point_1.classList.remove("tcs__point");
  tcs_point_2.classList.remove("tcs__point");
  tcs_point_3.classList.remove("tcs__point");
  tcs_point_5.classList.remove("tcs__point");
  tcs_point_6.classList.remove("tcs__point");
}

function changeBtnColorCoral(){
  body_menu.classList.add("teme--btn-coral");
  body_menu.classList.remove("teme--btn-cian", "teme--btn-aqua", "teme--btn-malaquita", "teme--btn-malva", "teme--btn-oro");
  tcs_point_5.classList.add("tcs__point");
  tcs_point_1.classList.remove("tcs__point");
  tcs_point_2.classList.remove("tcs__point");
  tcs_point_3.classList.remove("tcs__point");
  tcs_point_4.classList.remove("tcs__point");
  tcs_point_6.classList.remove("tcs__point");
}

function changeBtnColorOro(){
  body_menu.classList.add("teme--btn-oro");
  body_menu.classList.remove("teme--btn-cian", "teme--btn-aqua", "teme--btn-malaquita", "teme--btn-malva", "teme--btn-coral");
  tcs_point_6.classList.add("tcs__point");
  tcs_point_1.classList.remove("tcs__point");
  tcs_point_2.classList.remove("tcs__point");
  tcs_point_3.classList.remove("tcs__point");
  tcs_point_4.classList.remove("tcs__point");
  tcs_point_5.classList.remove("tcs__point");
}

function ChangeTemeColorDark(){
  body_menu.classList.add("teme--white", "var--text-black");
  body_menu.classList.remove("teme--dark", "var--text");
  tcs_t_light.classList.add("tcs--active");
  tcs_t_dark.classList.remove("tcs--active");
}

function ChangeTemeColorLigth(){
  body_menu.classList.add("teme--dark", "var--text");
  body_menu.classList.remove("var--text-black", "teme--white");
  tcs_t_dark.classList.add("tcs--active");
  tcs_t_light.classList.remove("tcs--active");
}

function pcNavbarActive(){
  ms_account.classList.add("ms-items__list");
  ms_my_market.classList.add("ms-items__list");
  ms_config.classList.add("ms-items__list");
  ms_account.classList.remove("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aic");
  ms_my_market.classList.remove("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aic");
  ms_config.classList.remove("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aic");
}

function laptopNavbarActive(){
  ms_account.classList.add("ms-items__list");
  ms_my_market.classList.add("ms-items__list");
  ms_config.classList.add("ms-items__list");
  ms_account.classList.remove("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aic");
  ms_my_market.classList.remove("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aic");
  ms_config.classList.remove("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aic");
}

function mobileNavbarActive(){
  ms_account.classList.remove("ms-items__list", "ms-items__list--ghost--aic");
  ms_my_market.classList.remove("ms-items__list", "ms-items__list--ghost--aic");
  ms_config.classList.remove("ms-items__list", "ms-items__list--ghost--aic");
  ms_account.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aife");
  ms_my_market.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aife");
  ms_config.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aife");

  if(ms_items_rig_lef_btn.classList.contains("ms-items__right-left__btn--left")){
    ms_account.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aifs");
    ms_my_market.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aifs");
    ms_config.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aife", "ms-items__list--ghost--aifs");
  }

  // ACTIVE CLICK, DISABLE THE REST OF SUB-NAVBAR
  ms_account.addEventListener("click", ()=>{
    subNavbarAccountActiveDisableTheRest();
  });

  ms_my_market.addEventListener("click", ()=>{
    subNavbarMyMarketActiveDisableTheRest();
  });

  ms_config.addEventListener("click", ()=>{
    subNavbarConfigActiveDisableTheRest();
  });
}

function tabletNavbarActive(){

  ms_account.classList.remove("ms-items__list", "ms-items__list--ghost--aife", "ms-items__list--ghost--aifs");
  ms_my_market.classList.remove("ms-items__list", "ms-items__list--ghost--aife", "ms-items__list--ghost--aifs");
  ms_config.classList.remove("ms-items__list", "ms-items__list--ghost--aife", "ms-items__list--ghost--aifs");
  ms_account.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aic");
  ms_my_market.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aic");
  ms_config.classList.add("ms-items__list--ghost", "ms-items__list--ghost--aic");

  // ACTIVE CLICK, DISABLE THE REST OF SUB-NAVBAR
  ms_account.addEventListener("click", ()=>{
    subNavbarAccountActiveDisableTheRest();
  });

  ms_my_market.addEventListener("click", ()=>{
    subNavbarMyMarketActiveDisableTheRest();
  });

  ms_config.addEventListener("click", ()=>{
    subNavbarConfigActiveDisableTheRest();
  });
}

function subNavbarAccountActiveDisableTheRest(){
  ms_sm_account.classList.add("ms__sm__container--1--expand");
  ms_sm_my_market.classList.remove("ms__sm__container--2--expand");
  ms_sm_config.classList.remove("ms__sm__container--3--expand");
}

function subNavbarMyMarketActiveDisableTheRest(){
  ms_sm_my_market.classList.add("ms__sm__container--2--expand");
  ms_sm_account.classList.remove("ms__sm__container--1--expand");
  ms_sm_config.classList.remove("ms__sm__container--3--expand");
}

function subNavbarConfigActiveDisableTheRest(){
  ms_sm_config.classList.add("ms__sm__container--3--expand");
  ms_sm_account.classList.remove("ms__sm__container--1--expand");
  ms_sm_my_market.classList.remove("ms__sm__container--2--expand");
}

function BlockerMobileRemoveRest(){
  actualDeviceBlocker = "BMobile"
  ms_ds_act_dis_mobile.classList.add("ms__ds__box__act-dis--active");
  ms_ds_icon_mobile.classList.add("ms__ds__box__icon--active");
  ms_ds_icon_svg_mobile.classList.add("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_tablet.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_tablet.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_tablet.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_laptop.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_laptop.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_laptop.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_pc.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_pc.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_pc.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_auto_svg.classList.remove("ms__ds__auto__svg--active");
}

function BlockerTabletRemoveRest(){
  actualDeviceBlocker = "BTablet"
  ms_ds_act_dis_tablet.classList.add("ms__ds__box__act-dis--active");
  ms_ds_icon_tablet.classList.add("ms__ds__box__icon--active");
  ms_ds_icon_svg_tablet.classList.add("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_mobile.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_mobile.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_mobile.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_laptop.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_laptop.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_laptop.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_pc.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_pc.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_pc.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_auto_svg.classList.remove("ms__ds__auto__svg--active");
}

function BlockerLaptopRemoveRest(){
  actualDeviceBlocker = "BLaptop"
  ms_ds_act_dis_laptop.classList.add("ms__ds__box__act-dis--active");
  ms_ds_icon_laptop.classList.add("ms__ds__box__icon--active");
  ms_ds_icon_svg_laptop.classList.add("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_mobile.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_mobile.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_mobile.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_tablet.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_tablet.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_tablet.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_pc.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_pc.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_pc.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_auto_svg.classList.remove("ms__ds__auto__svg--active");
}

function BlockerPcRemoveRest(){
  actualDeviceBlocker = "BPc"
  ms_ds_act_dis_pc.classList.add("ms__ds__box__act-dis--active");
  ms_ds_icon_pc.classList.add("ms__ds__box__icon--active");
  ms_ds_icon_svg_pc.classList.add("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_mobile.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_mobile.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_mobile.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_tablet.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_tablet.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_tablet.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_laptop.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_laptop.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_laptop.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_auto_svg.classList.remove("ms__ds__auto__svg--active");
}

function BlockerAutomaticRemoveRest(){
  actualDeviceBlocker = "none"
  ms_ds_auto_svg.classList.add("ms__ds__auto__svg--active");
  ms_ds_act_dis_mobile.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_mobile.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_mobile.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_tablet.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_tablet.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_tablet.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_laptop.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_laptop.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_laptop.classList.remove("ms__ds__box__icon__svg--active");
  ms_ds_act_dis_pc.classList.remove("ms__ds__box__act-dis--active");
  ms_ds_icon_pc.classList.remove("ms__ds__box__icon--active");
  ms_ds_icon_svg_pc.classList.remove("ms__ds__box__icon__svg--active");
}



// if (body.classList.contain("teme--black") == true);
//     tcs_dark.classList.add()
// "reply" para el boton de volver al menu y al lado el boton de subir al inicio de la pagina
// "vertical_align_top", para la flecha de arriba
