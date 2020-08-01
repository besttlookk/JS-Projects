const prevElement = document.getElementById('prev')
const nextElement = document.getElementById('next')
const slides = document.querySelectorAll('.slide');

let auto = true;
let intervalTime = 4000;
let slideInterval




prevElement.addEventListener('click', ()=>{
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
    }
});
nextElement.addEventListener('click', ()=>{
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
    }
});

function prevSlide(){
    currentSlide = document.querySelector('.slide.current')
    currentSlide.classList.remove('current');
    currentSlide.firstElementChild.classList.remove('current')

    if(currentSlide.previousElementSibling){
        currentSlide.previousElementSibling.classList.add('current')
        currentSlide.previousElementSibling.firstElementChild.classList.add('current')
    }
    else{
      
        slides[slides.length -1].classList.add('current')
        slides[slides.length -1].firstElementChild.classList.add('current')
    }

    

}

function nextSlide(){
    currentSlide = document.querySelector('.slide.current')
    currentSlide.classList.remove('current');
    currentSlide.firstElementChild.classList.remove('current')


    if(currentSlide.nextElementSibling){
        currentSlide.nextElementSibling.classList.add('current')
        currentSlide.nextElementSibling.firstElementChild.classList.add('current')
    }
    else{
        // sliderElement.firstElementChild.classList.add('current')
        // sliderElement.firstElementChild.firstElementChild.classList.add('current')
        slides[0].classList.add('current')
        slides[0].firstElementChild.classList.add('current')
    }

  

}


if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}