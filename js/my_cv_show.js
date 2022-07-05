cv_select_box = document.getElementById("cv-select-box");
portfolio_select_box = document.getElementById("portfolio-select-box");

cv_block_container = document.getElementById("cv-block-container");
port_block_container = document.getElementById("port-block-container");


cv_variable_status = "active"
port_variable_status = "disable"

    // START


cv_select_box.addEventListener("click", ()=>{
    portfolio_select_box.classList.remove("portfolio__select__box--port");
    cv_select_box.classList.remove("cv__select__box--port");
        if(cv_variable_status == "disable"){
            port_block_container.classList.toggle("port__block__container--active");
            cv_block_container.classList.toggle("cv__block__container--disable");
        }
    port_variable_status = "disable"
    cv_variable_status = "active"
});
portfolio_select_box.addEventListener("click",()=>{
    cv_select_box.classList.add("cv__select__box--port");
    portfolio_select_box.classList.add("portfolio__select__box--port");
        if(port_variable_status == "disable"){
            cv_block_container.classList.toggle("cv__block__container--disable");
            port_block_container.classList.toggle("port__block__container--active");
        }
    cv_variable_status = "disable"
    port_variable_status = "active"
});



// portfolio_select_box.addEventListener("click", ()=>{
    // cv_select_box.c
    // portfolio_select_box
// });
