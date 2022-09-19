let totalSlides = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

currentSlide = 1;

let sliderStyle = document.querySelector('.slider--width').style

function goNext() {
    if(currentSlide == totalSlides){
        sliderStyle.marginLeft = `0`;
        currentSlide = 1;
    } else {
        sliderStyle.marginLeft = `calc(-100vw * ${currentSlide})`;
        currentSlide ++;
    }
}

function goPrev() {
    if(currentSlide == 1){
        sliderStyle.marginLeft = `calc(-100vw * (${totalSlides} - 1))`;
        currentSlide = totalSlides;
    } else {
        sliderStyle.marginLeft = `calc(${sliderStyle.marginLeft} + 100vw)`;
        currentSlide --;
    }
}

setInterval(goNext, 4000);