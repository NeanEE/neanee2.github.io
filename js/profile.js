profile_certifications = document.getElementById("profile-certifications");

profile_postulations_mid_container = document.getElementById("profile-postulations-mid-container");
profile_postulations = document.getElementById("profile-postulations");

profile_cont2 = document.getElementById("profile-cont2");

profile_cv_mid = document.getElementById("profile-cv-mid");
profile_cv_botton = document.getElementById("profile-cv-botton");
profile_cv_btn = document.getElementById("profile-cv-btn");
profile_cv_icon = document.getElementById("p-cv-expand");

profile_postulations_mid = document.getElementById("profile-postulations-mid");
profile_postulations_mid_scroll = document.getElementById("profile-postulations-mid-scroll");
profile_postulations_botton = document.getElementById("profile-postulations-botton");
profile_p_btn = document.getElementById("profile-p-btn");
p_p_expand = document.getElementById("p-p-expand");

profile_cont3 = document.getElementById("profile-cont3");

profile_mm__mid = document.getElementById("profile-mm-mid");
profile_mm_mid_scroll = document.getElementById("profile-mm-mid-scroll");
profile_mm_botton = document.getElementById("profile-mm-botton");
profile_mm_btn = document.getElementById("profile-mm-btn");
p_mm_expand = document.getElementById("p-mm-expand");

p_mm_mm_title = document.getElementById("p-mm-mm-title");
p_mm_mm_box_container = document.getElementById("p-mm-mm-box-container");
p_mm_mm_options_container = document.getElementById("p-mm-mm-options-container");
p_mm_mm_option_text = document.getElementById("p-mm-mm-option-text");
p_mm_mm_option_btns = document.getElementById("p-mm-mm-option-btns");
p_mm_mm_recive_cv = document.getElementById("p-mm-mm-recive-cv");
p_mm_mm_expand_box_container = document.getElementById("p-mm-mm-expand-box-container");

profile_cer_mid = document.getElementById("profile-cer-mid");
profile_cer_botton = document.getElementById("profile-cer-botton");
profile_cer_btn = document.getElementById("profile-cer-btn");
profile_cer_icon = document.getElementById("p-cer-expand");


// BOTON DE CV

profile_cv_btn.addEventListener("click", ()=>{
    profile_cont2.classList.toggle("profile-cont2--expand--1");

    profile_cv_botton.classList.toggle("profile__cv__box--botton--expand");
    profile_cv_mid.classList.toggle("profile__cv__box--mid--expand");
    profile_cv_btn.classList.toggle("p__btn__expand--expand");
    profile_cv_icon.classList.toggle("p__btn__expand--expand");


    // Añadirle transform: translateY(0.5em); a la barra central cuando se mueve el mis post (translate) y se activa el mi cv

    if (window.matchMedia("(max-width:900px)").matches){
        profile_postulations.classList.toggle("profile__p--media");

        if (profile_p_btn.classList.contains("p__btn__expand--expand") == true)
        {
            profile_cont2.classList.toggle("profile-cont2--expand--3");
        }
        if(profile_postulations_mid.classList.contains("profile__postulations__box__mid--expand") == true){
            profile_postulations_mid_container.classList.toggle("profile__postulations__mid__container--900px");
            // Tengo que decirle que se ejecute esto para añadir la clase al hacer click en cv y estando pop activo, pero si el click es para cerrar el cv, entonces tiene que remover la clase, el problema es que tiene que hacerlo con un timeout de 800, al abrir lo hacer al instante
        }
    }
});

// BOTON DE POSTULATIONS

profile_p_btn.addEventListener("click", ()=>{
    profile_cont2.classList.toggle("profile-cont2--expand-2");

    profile_postulations_botton.classList.toggle("profile__postulations__box__botton--expand");
    profile_postulations_mid.classList.toggle("profile__postulations__box__mid--expand");
    profile_postulations_mid_scroll.classList.toggle("p__p__space-scroll__container--expand");
    profile_p_btn.classList.toggle("p__btn__expand--expand");
    p_p_expand.classList.toggle("p__btn__expand--expand");

    if (window.matchMedia("(max-width:900px)").matches){
        // pop añadir clase -- cambiando el width
        profile_postulations_mid_container.classList.add("profile__postulations__mid__container--900px");
        if (profile_cv_btn.classList.contains("p__btn__expand--expand") == true)
        {
            profile_cont2.classList.toggle("profile-cont2--expand--3");
        }
    }
    
});

// if (profile_cont3.classList.contains("profile-cont3--expand--1") && profile_cer_btn.classList.contains("p__btn__expand--expand") == true)
// {
//     profile_cont3.classList.add("profile-cont3--expand--1");
// }
// if (window.matchMedia("(max-width:900px)").matches){
//     profile_certifications.classList.toggle("profile__certifications--media");

//     if (profile_cer_btn.classList.contains("p__btn__expand--expand") == true)
//     {
//         profile_cont3.classList.toggle("profile-cont3--expand--3");
//     }
// }










    // BOTON DE MY-MARKETS

profile_mm_btn.addEventListener("click", ()=>{
    profile_cont3.classList.toggle("profile-cont3--expand--2");
    profile_mm_botton.classList.toggle("profile__mm__box--botton--expand");
    profile_mm__mid.classList.toggle("profile__mm__box--mid--expand");
    profile_mm_mid_scroll.classList.toggle("p__mm__space-scroll__container--expand");
    profile_mm_btn.classList.toggle("p__btn__expand--expand");
    p_mm_expand.classList.toggle("p__btn__expand--expand");

    if (profile_cont3.classList.contains("profile-cont3--expand--1") && profile_cer_btn.classList.contains("p__btn__expand--expand") == true)
    {
        profile_cont3.classList.add("profile-cont3--expand--1");
    }
    if (window.matchMedia("(max-width:900px)").matches){
        profile_certifications.classList.toggle("profile__certifications--media");

        if (profile_cer_btn.classList.contains("p__btn__expand--expand") == true)
        {
            profile_cont3.classList.toggle("profile-cont3--expand--3");
        }
    }
});

    // SUB-BOTON DE MY-MARKETS (MARKET INDIVIDUAL)

            p_mm_mm_box_container.addEventListener("click", ()=>{
                p_mm_mm_title.classList.toggle("p__mm__mm__title--expand");
                p_mm_mm_options_container.classList.toggle("p__mm__mm__options__container--expand");
                p_mm_mm_option_text.classList.toggle("p__mm__mm__option__text--expand");
                p_mm_mm_option_btns.classList.toggle("p__mm__mm__option__btns--expand");
                p_mm_mm_recive_cv .classList.toggle("p__mm__mm__recive-cv--expand");
                p_mm_mm_expand_box_container.classList.toggle("p__mm__mm__expand__box__container--expand");
            });

// BOTON DE CERTIFICATIONS

profile_cer_btn.addEventListener("click", ()=>{
    profile_cont3.classList.toggle("profile-cont3--expand--1");
    profile_cer_botton.classList.toggle("profile__cer__box--botton--expand");
    profile_cer_mid.classList.toggle("profile__cer__box--mid--expand");
    profile_cer_btn.classList.toggle("p__btn__expand--expand");
    profile_cer_icon.classList.toggle("p__btn__expand--expand");
    if (window.matchMedia("(max-width:900px)").matches){
        if (profile_mm_btn.classList.contains("p__btn__expand--expand") == true)
        {
            profile_cont3.classList.toggle("profile-cont3--expand--3");
        }
    }
});






// RESPONSIVE BOXES
// if (window.matchMedia("(max-width:900px)").matches){
//     profile_mm_btn.addEventListener("click", ()=>{
//         profile_certifications.classList.toggle("profile__certifications--media");
//     });

//     profile_cv_btn.addEventListener("click", ()=>{
//         profile_postulations.classList.toggle("profile__postulations--media");
//     });
//     if (profile_mm_btn.classList.contains("p__btn__expand--expand") == false){
//         profile_mm_btn.addEventListener("click", ()=>{
//             profile_cer_mid.classList.toggle("profile__cer__box--mid--expand--expand");
//         });
//     }

// click en mm o cer, pregunte si el otro tiene expand, si tiene entonces aplica la funcion (toogle)

// EXPANCION
// profile_mm_btn.addEventListener("click", ()=>{
//     if (profile_mm_btn.classList.contains("p__btn__expand--expand") || profile_cer_btn.classList.contains("p__btn__expand--expand") == true)
//     {    
//         profile_cont3.classList.toggle("profile-cont3--expand--3");
//     }
//     });
// profile_cer_btn.addEventListener("click", ()=>{
//     if (profile_cer_btn.classList.contains("p__btn__expand--expand") && profile_cont3.classList.contains("profile-cont3--expand--3") == true)
//     {    
//         profile_cont3.classList.toggle("profile-cont3--expand--3");
//     }
    
//     if (profile_cer_btn.classList.contains("p__btn__expand--expand") && profile_cer_btn.classList.contains("p__btn__expand--expand") == true)
//     {    
//         profile_cont3.classList.toggle("profile-cont3--expand--3");
//     }
//     });

    // CONTRACCION

    // Que cuando se le da click a uno u otro pregunte si tiene la clase --3 y se la cambie por la que debe, tambien debe preguntar la clase del otro btn

    // pregunta el btn mm, el btn cer y el container3. x2 para el otro btn cer

    // profile_mm_btn.addEventListener("click", ()=>{
    //     if (profile_mm_btn.classList.contains("p__btn__expand--expand") && profile_cer_btn.classList.contains("p__btn__expand--expand") == false)
    //     {
    //         profile_cont3.classList.remove("profile-cont3--expand--3");
    //         profile_cont3.classList.add("profile-cont3--expand--1");
            
    //     }
    // })

    // Esto es para que cuando se activen los dos, tenga un height adecuado


// };
    


// RESPONSIVE BOXES
// if (window.matchMedia("(max-width:900px)").matches){
//     profile_mm_btn.addEventListener("click", ()=>{
//         profile_certifications.classList.toggle("profile__certifications--media");
//     });

//     profile_cv_btn.addEventListener("click", ()=>{
//         profile_postulations.classList.toggle("profile__postulations--media");
//     });
//     if (profile_mm_btn.classList.contains("p__btn__expand--expand") == false){
//         profile_mm_btn.addEventListener("click", ()=>{
//             profile_cer_mid.classList.toggle("profile__cer__box--mid--expand--expand");
//         });
//     }


    // if (profile_mm_btn.classList.contains("") & profile_cer_btn.classList.contains("")) Esto es para que cuando se activen los dos, tenga un height adecuado


// };

// window.addEventListener("resize", ()=>{

// }

// profile_cer_mid
// profile_postulations_mid_container

// .p__mm__mm__option__text--expand
// .p__mm__mm__option__btns--expand
// .p__mm__mm__recive-cv--expand
// p__mm__mm__expand__box__container--expand









// MM Y CER 
// MM EXPAND Y CER 
// MM Y CER EXPAND
// MM EXPAND Y CER EXPAND
// . 

// MM, CER, EXPAND 0
// MM EXPAND, CER, EXPAND 1
// MM, CER EXPAND, EXPAND 2
// MM EXPAND, CER EXPAND, EXPAND 3
