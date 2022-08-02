function slider() {
    const deactivateActiveItem = require('../services/deactivateActiveItem'),
        toggleActiveItem = require('../services/toggleActiveItem')
    ;


    //slider
    const sliderPrevArrow = document.querySelector('.offer__slider-prev'),
        sliderNextArrow = document.querySelector('.offer__slider-next'),
        sliderWrapper = document.querySelector('.offer__slider-wrapper'),
        offerSliderInner = document.querySelector('.offer__slider-inner'),
        currentSlide = document.querySelector('#current'),
        totalSlides = document.querySelector('#total'),
        slides = document.querySelectorAll('.offer__slide'),
        sliderBlock = document.querySelector('.offer__slider'),
        width = window.getComputedStyle(sliderWrapper).width
    ;

    let slideIndex = 1;

    slides.forEach(slide => {
        slide.style.width = width;
    });

    offerSliderInner.style.width = `${100 * slides.length}%`;


    if(slides.length < 10){
        totalSlides.textContent = `0${slides.length}`;
    } else {
        totalSlides.textContent = slides.length;
    }

    setCurrentSlideIndex(currentSlide, slideIndex);


    const wrapperWidth = width.match(/\d/g).join('');

    sliderNextArrow.addEventListener('click', () => {
        slideIndex++;


        if(slideIndex > slides.length){
            slideIndex = 1;
        }

        sliderLifeCycle(slideIndex);
    });
    
    sliderPrevArrow.addEventListener('click', () => {
        slideIndex--;

        
        if(slideIndex <= 0){
            slideIndex = slides.length;
        }

        sliderLifeCycle(slideIndex);
    });

    function setCurrentSlideIndex(currentTextField, index) {
        index < 10 ? currentTextField.textContent = `0${index}` : currentTextField.textContent = index;
    }

    function setSlidePosition(slidesInner, index) {
        let curPos = wrapperWidth * (index - 1);
        
        slidesInner.style.right = `${curPos}px`;
    }

    // slider dots
    const dotsContainer = document.createElement('ul');
    dotsContainer.classList.add('carousel-indicators');

    for(let i = 1; i <= slides.length; i++){
        dotsContainer.innerHTML += `
            <li class="dot" data-index="${i}"></li>
        `;
    }
    sliderBlock.append(dotsContainer);


    const dots = document.querySelectorAll('.dot');
    
    function clickedDot(index) {
        dots[index-1].classList.add('active-dot');

        dotsContainer.addEventListener('click', (e) => {
            slideIndex = e.target.getAttribute('data-index');
            
            toggleActiveItem(e, 'dot', 'active-dot');
            setCurrentSlideIndex(currentSlide, slideIndex);
            setSlidePosition(offerSliderInner, slideIndex);
        });
    }

    clickedDot(slideIndex);

    function sliderLifeCycle(index) {
        deactivateActiveItem(dots, 'active-dot');

        clickedDot(index);
        setCurrentSlideIndex(currentSlide, index);
        setSlidePosition(offerSliderInner, index);
    }
}

module.exports = slider;