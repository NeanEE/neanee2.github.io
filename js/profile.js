profile_cv_mid = document.getElementById("profile-cv-mid");
profile_cv_botton = document.getElementById("profile-cv-botton");
profile_cv_btn = document.getElementById("profile-cv-btn");

profile_cv_btn.addEventListener("click", ()=>{
    profile_cv_botton.classList.toggle("profile__cv__box--botton--expand");
    profile_cv_mid.classList.toggle("profile__cv__box--mid--expand");
    profile_cv_btn.classList.toggle("p__cv__expand--expand");
});

// USAR WHIDTH DE 0 A MINCONTENT EN LUGAR DE SCALE 0% 100%    