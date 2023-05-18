
const rowRight = document.querySelector(".projectIndi__slider-right")
const rowLeft = document.querySelector(".projectIndi__slider-left")


const containerInterior = document.querySelector(".projectIndi__slider-interior")



rowRight.addEventListener("click", () => {

    if(containerInterior.classList.contains("slider__img1")){
        containerInterior.classList.replace("slider__img1","slider__img2")
        return
    } 
    if (containerInterior.classList.contains("slider__img2")) {
        containerInterior.classList.replace("slider__img2","slider__img3")
        return
    } 

    if (containerInterior.classList.contains("slider__img3")) {
        containerInterior.classList.replace("slider__img3","slider__img1")
        return
    } 
})



rowLeft.addEventListener("click", () => {

    if(containerInterior.classList.contains("slider__img1")){
        containerInterior.classList.replace("slider__img1","slider__img3")
        return
    } 
    if (containerInterior.classList.contains("slider__img3")) {
        containerInterior.classList.replace("slider__img3","slider__img2")
        return
    } 

    if (containerInterior.classList.contains("slider__img2")) {
        containerInterior.classList.replace("slider__img2","slider__img1")
        return
    } 
})