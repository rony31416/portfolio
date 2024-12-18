const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const numberOfSlide = slides.length;
const slideBtns = document.querySelectorAll(".slide-btn");
const slideIndicatorBars = document.querySelectorAll(".indicator-bar");
var slideNumber = 0;


const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");


//slide next button navigation 

nextBtn.addEventListener("click" , () =>{
   
    slides.forEach((slide) =>{
        slides.classList.remove("active");
    });
    
    slideBtns.forEach((slideBtn) =>{
        slideBtn.classList.remove("active");
    });
    slideIndicatorBars.forEach((slideIndicatorBar) =>{
        slideIndicatorBar.classList.remove("active");
    });
 
    slideNumber++;
    if(slideNumber > (numberOfSlide - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideBtns[slideNumber].classList.add("active");
    slideIndicatorBars[slideNumber].classList.add("active");
});