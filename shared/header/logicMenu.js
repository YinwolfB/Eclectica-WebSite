
function names() {
    const btnMenuOpen = document.querySelector(".header__button")
    const btnMenuClose = document.querySelector(".header__close-btn")
    
    
    const containerMenu = document.querySelector(".header__ul")
    
    
    
    btnMenuOpen.addEventListener("click", () => {
        containerMenu.classList.add("header__ul-show")
    })
    
    
    btnMenuClose.addEventListener("click", () => {
        containerMenu.classList.remove("header__ul-show")
    })
    
    
}



    fetch("../../../../../shared/header/headerMenu.html")
    .then (response => response.text())
    .then(html => {
        document.querySelector(".header__menu").innerHTML = html
        names()
    }) 






