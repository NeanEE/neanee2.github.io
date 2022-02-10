nav_bar = document.getElementById("objets-ms_items");
nav_bar_btn = document.getElementById("objets-btn_navbar");
objets_navbar_logo = document.getElementById("objets-navbar-logo");
objets_navbar = document.getElementById("objets-navbar");


nav_bar_btn.addEventListener('click', () => {
    nav_bar.classList.toggle('active');
            objets_navbar_logo.classList.toggle("var--text-black");
            objets_navbar.classList.toggle("menu-sidebar--btn");
            nav_bar_btn.classList.toggle("var--text-black")
})