
const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalID = null;


//init(); 
document.addEventListener("DOMContentLoaded", init)

function init(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide")
        intervalID = setInterval(nextSlide, 5000)
    }
}

function showSlide(index){
    if(index >= slides.length){ slideIndex = 0; }
    else if(index < 0){ slideIndex = slides.length - 1; }
    console.log(slideIndex)

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide")
}

function nextSlide(){
    clearInterval(intervalID)
    slideIndex++;
    showSlide(slideIndex)
}

function prevSlide(){
    clearInterval(intervalID)
    slideIndex--;
    showSlide(slideIndex)
}