
    function names() {
    const btnMenu = document.querySelector(".bx-menu")
    const containerMenu = document.querySelector(".header__ul")

    btnMenu.addEventListener("click", () => {
        containerMenu.classList.toggle("header__ul-show")
        })
    }



    fetch("headerMenu.html")
    .then (response => response.text())
    .then(html => {
        document.querySelector(".header__menu").innerHTML = html
        names()
    }) 






