let somosOpen = document.querySelector(".nosotros__tittle")
let textOpen = document.querySelector(".nosotros__content")
let textClose = document.querySelector(".nosotros__close_content")

somosOpen.addEventListener("click",()=>{
    textOpen.classList.add("nosotros__cardOpen")
})

textClose.addEventListener("click", ()=>{
    textOpen.classList.remove("nosotros__cardOpen")
})