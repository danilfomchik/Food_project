/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_toggleActiveItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/toggleActiveItem */ "./js/services/toggleActiveItem.js");



function calculator() {

    //calculator
    const calculatingGender = document.querySelector('.calculating__choose#gender'),
        calculatingActivity = document.querySelector('.calculating__choose_big'),
        [...calculatingParameters] = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item'),
        calculatingResult = document.querySelector('.calculating__result span')
    ;

    let calories = 0;

    calculatingResult.textContent = calories;

    let currentSexCoef = 447.6,
        currentActivityCoef = 1.375,
        height = 0,
        weight = 0,
        age = 0
    ;

    const genderChoose = [...calculatingGender.querySelectorAll('.calculating__choose-item')];
    const activityChoose = [...calculatingActivity.querySelectorAll('.calculating__choose-item')];


    if(localStorage.getItem('currentSexCoef')){
        currentSexCoef = +localStorage.getItem('currentSexCoef');
        setDefaultParameters('currentSexCoef', genderChoose, 'calculating__choose-item_active', 'data-sex');
    }

    if(localStorage.getItem('currentActivityCoef')){
        currentActivityCoef = +localStorage.getItem('currentActivityCoef');
        setDefaultParameters('currentActivityCoef', activityChoose, 'calculating__choose-item_active', 'data-activity');
    }

    function setDefaultParameters(storageKey, itemsChooseArr, activeClass, attribute) {
        itemsChooseArr.forEach(item => {
            item.classList.remove(activeClass);
    
            if(item.getAttribute(attribute) === localStorage.getItem(storageKey)){
                item.classList.add(activeClass);
            }
        });
    }


    calcCalories();

    function checkSex(e) {
        if(e.target && e.target.classList.contains('calculating__choose-item')){
            currentSexCoef = +e.target.getAttribute('data-sex');
            localStorage.setItem('currentSexCoef', +e.target.getAttribute('data-sex'));

            calcCalories();
        }
    }

    function checkActivity(e) {
        if(e.target && e.target.classList.contains('calculating__choose-item')){
            currentActivityCoef = +e.target.getAttribute('data-activity');
            localStorage.setItem('currentActivityCoef', +e.target.getAttribute('data-activity'));

            calcCalories();
        }        
    }

    function calcCalories() {
        const currentSex = calculatingGender.querySelector('.calculating__choose-item_active');

        // console.log(currentSex);

        if(weight > 0 && height > 0 && age > 0){
            currentSex.id === 'male' ? calories = (currentSexCoef + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * currentActivityCoef 
                                     : calories = (currentSexCoef + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * currentActivityCoef
            ;

            calculatingResult.textContent = Math.round(calories);
        } else {
            calculatingResult.textContent = 0;
        }
    }

    calculatingParameters.forEach(input => {
        input.addEventListener('input', (e) => {
            // console.log(typeof(e.target.value), +e.target.value);


            if(e.target.value.match(/\D/g)){
                e.target.classList.add('incorect__input-value');
                calculatingResult.textContent = 0;
            } else {
                e.target.classList.remove('incorect__input-value');
            }

            switch(e.target.id){
                case 'height':
                    height = +e.target.value;
                    break;
                case 'weight': 
                    weight = +e.target.value;
                    break;
                case 'age':
                    age = +e.target.value;
                    break;
            }

            calcCalories();

            
        });
    });

    calculatingGender.addEventListener('click', (e) => {
        (0,_services_toggleActiveItem__WEBPACK_IMPORTED_MODULE_0__["default"])(e, 'calculating__choose-item', 'calculating__choose-item_active');

        checkSex(e);
    });
    calculatingActivity.addEventListener('click', (e) => {
        (0,_services_toggleActiveItem__WEBPACK_IMPORTED_MODULE_0__["default"])(e, 'calculating__choose-item', 'calculating__choose-item_active');

        checkActivity(e);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
    // //daily menu class 1st variant
    // class DailyMenu{
    //     constructor(img, title, description, price, parentSelector, ...classes){
    //         this.img = img;
    //         this.title = title;
    //         this.description = description;
    //         this.price = price;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector);

    //         this.transfer = 28;
    //         this.changeToUAH();
    //     }

    //     changeToUAH() {
    //         this.price = this.price * this.transfer;
    //     }

    //     renderDailyMenu() {
    //         const element = document.createElement('div');

    //         if(this.classes.length == 0){
    //             this.element = 'menu__item';
    //             element.classList.add(this.element);
    //         } else{
    //             this.classes.forEach(className => element.classList.add(className));
    //         }

    //         element.innerHTML = `
    //             <img src=${this.img} alt=${this.title}>
    //             <h3 class="menu__item-subtitle">Меню “${this.title}”</h3>
    //             <div class="menu__item-descr">${this.description}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //             </div>
    //         `;
    //         this.parent.append(element);
    //     }
    // }

    // //daily menu items
    // new DailyMenu(
    //     'img/tabs/vegy.jpg', 
    //     'Фитнес', 
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
    //     15, 
    //     '.menu__field .container'
    // ).renderDailyMenu();

    // new DailyMenu(
    //     'img/tabs/elite.jpg', 
    //     'Премиум', 
    //     'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
    //     33, 
    //     '.menu__field .container',
    //     'menu__item'
    // ).renderDailyMenu();

    // new DailyMenu(
    //     'img/tabs/post.jpg', 
    //     'Постное', 
    //     'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
    //     26, 
    //     '.menu__field .container',
    //     'menu__item'
    // ).renderDailyMenu();


    //daily menu class 2nd variant
    class DailyMenu {
        constructor(img, title, description, price, container){
            this.img = img;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parentContainer = document.querySelector(container)

            this.transfer = 28;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        renderDailyMenu(){
            this.parentContainer.innerHTML += `
                <div class="menu__item">
                    <img src=${this.img} alt=${this.title}>
                    <h3 class="menu__item-subtitle">Меню “${this.title}”</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
        }
    }


    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, title, descr, price}) => {
            new DailyMenu(img, title, descr, price, '.menu__field .container').renderDailyMenu();
        });
    })
    .catch(() => {
        console.error('error');
    })

    // axios.get('http://localhost:3000/menu')
    // .then(response => {
    //     response.data.forEach(({img, title, descr, price}) => {
    //         new DailyMenu(img, title, descr, price, '.menu__field .container').renderDailyMenu();
    //     });
    // })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(setModalTimer, formSelector) {
    //forms
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            
            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
            })
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        prevModalDialog.classList.remove('show');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', setModalTimer);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 1000);
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, setModalTimer){
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if(setModalTimer){
        clearInterval(setModalTimer);
    }
}

function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function modal(triggerSelector, modalSelector, setModalTimer) {
    //MODAL
    const modal = document.querySelector(modalSelector),
        modalOpenBtn = document.querySelectorAll(triggerSelector)
    ;

    function showModalByScroll() {
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal(modalSelector, setModalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // window.addEventListener('scroll', showModalByScroll);

    modalOpenBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(modalSelector, setModalTimer);
        });
    });


    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.classList.contains('show')){
            closeModal(modalSelector);
        }
    });

    modal.addEventListener('click', (e) => {
        if(e.target.matches('.modal') || e.target.getAttribute('data-close') == ''){
            closeModal(modalSelector);
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_deactivateActiveItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/deactivateActiveItem */ "./js/services/deactivateActiveItem.js");
/* harmony import */ var _services_toggleActiveItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/toggleActiveItem */ "./js/services/toggleActiveItem.js");



function slider({sliderContainer, allSlides, wrapper, sliderInner, nextArrow, prevArrow, totalCounter, currentCounter}) {

    //slider
    const sliderPrevArrow = document.querySelector(prevArrow),
        sliderNextArrow = document.querySelector(nextArrow),
        sliderWrapper = document.querySelector(wrapper),
        offerSliderInner = document.querySelector(sliderInner),
        currentSlide = document.querySelector(currentCounter),
        totalSlides = document.querySelector(totalCounter),
        slides = document.querySelectorAll(allSlides),
        sliderBlock = document.querySelector(sliderContainer),
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
            if(e.target && e.target.tagName === 'LI'){
                slideIndex = e.target.getAttribute('data-index');
            
                (0,_services_toggleActiveItem__WEBPACK_IMPORTED_MODULE_1__["default"])(e, 'dot', 'active-dot');
                setCurrentSlideIndex(currentSlide, slideIndex);
                setSlidePosition(offerSliderInner, slideIndex);
            }
        });
    }

    clickedDot(slideIndex);

    function sliderLifeCycle(index) {
        (0,_services_deactivateActiveItem__WEBPACK_IMPORTED_MODULE_0__["default"])(dots, 'active-dot');

        clickedDot(index);
        setCurrentSlideIndex(currentSlide, index);
        setSlidePosition(offerSliderInner, index);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_deactivateActiveItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/deactivateActiveItem */ "./js/services/deactivateActiveItem.js");


function tabs(tabsSelector, tabContent, tabsSelectorItem, activeClass) {
    //tabs 1 variant
    // const tabheader__items = document.querySelector('.tabheader__items');
    // const tabcontent = document.querySelectorAll('.tabcontent');

    // let deactivateActiveItem = () => {
    //     const activeBlock = document.querySelector('.tabcontent.active');
    //     const activeTitle = document.querySelector('.tabheader__item_active');

    //     if(activeBlock){
    //         activeBlock.classList.remove('active', 'fade');
    //     } 
    //     if (activeTitle){
    //         activeTitle.classList.remove('tabheader__item_active');
    //     }
    // };

    // tabheader__items.addEventListener('click', (event) => {
    //     if(event.target && event.target.matches('.tabheader__item')){
    
    //         tabcontent.forEach(item => {
    //             if(event.target.textContent == item.dataset.name){

    //                 deactivateActiveItem();

    //                 item.classList.add('active', 'fade');
    //                 event.target.classList.add('tabheader__item_active');
    //             }
    //         });
    //     }
    // });

    //tabs 2 variant
    const tabheader__items = document.querySelector(tabsSelector);
    const tabcontent = document.querySelectorAll(tabContent);

    tabheader__items.addEventListener('click', (e) => {
        if(e.target && e.target.matches(`div${tabsSelectorItem}`)){
            const item = tabheader__items.querySelectorAll(tabsSelectorItem);

            (0,_services_deactivateActiveItem__WEBPACK_IMPORTED_MODULE_0__["default"])(item, activeClass);

            tabcontent.forEach(tab => {
                tab.classList.remove('active');
                tab.classList.add('fade');

                if(e.target.textContent === tab.getAttribute('data-name')){
                    e.target.classList.add(activeClass);
                    tab.classList.toggle('active');
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(timerSelector, endDate) {
    //timer 1st variant
    // const deadLine = '2022-05-20';

    // function getTimeRemaining(end) {
    //     const endTime = Date.parse(end) - Date.parse(new Date()),
    //         remainingDays = Math.floor(endTime / (1000 * 60 * 60 * 24)),
    //         remainingHours = Math.floor((endTime / (1000 * 60 * 60) % 24)),
    //         remainingMinutes = Math.floor((endTime / 1000 / 60) % 60),
    //         remainingSeconds = Math.floor((endTime / 1000) % 60)
    //     ;

    //     return {
    //         'total': endTime,
    //         'days': remainingDays,
    //         'hours': remainingHours,
    //         'minutes': remainingMinutes,
    //         'seconds': remainingSeconds
    //     }
    // }

    // function getZero(num) {
    //     if(num >= 0 && num < 10){
    //         return `0${num}`;
    //     } else {
    //         return num;
    //     }
    // }

    // function setClock(selector, endTime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000)
    //     ;

    //     updateClock();

    //     function updateClock() {
    //         const curTime = getTimeRemaining(endTime);

    //         days.textContent = getZero(curTime.days);
    //         hours.textContent = getZero(curTime.hours);
    //         minutes.textContent = getZero(curTime.minutes);
    //         seconds.textContent = getZero(curTime.seconds);

    //         if(curTime.total <= 0){
    //             clearInterval(timeInterval);
    //         }
    //     }

        
    // }

    // setClock('.timer', deadLine);


    //timer 2nd variant

    function getDate(deadline) {
        let endTime = 0;

        if(Date.parse(deadline) >= Date.parse(new Date())){
            endTime = Date.parse(deadline) - Date.parse(new Date());
        }

        const remainingDays = Math.floor(endTime / (1000 * 60 * 60 * 24)),
            remainingHours = Math.floor((endTime / (1000 * 60 * 60) % 24)),
            remainingMinutes = Math.floor((endTime / 1000 / 60) % 60),
            remainingSeconds = Math.floor((endTime / 1000) % 60)
        ;


        return {
            endTime,
            remainingDays,
            remainingHours,
            remainingMinutes,
            remainingSeconds
        };
    }

    function showDate(selector, deadline) {
        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTime, 1000)
        ;

        updateTime();

        function updateTime() {
            let {endTime, remainingDays, remainingHours, remainingMinutes, remainingSeconds} = getDate(deadline);

            days.textContent = getZero(remainingDays);
            hours.textContent = getZero(remainingHours)
            minutes.textContent = getZero(remainingMinutes);
            seconds.textContent = getZero(remainingSeconds);

            if(endTime <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    function getZero(number) {
        if(number >= 0 && number < 10){
            return `0${number}`
        }

        return number;
    }

    showDate(timerSelector, endDate);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/deactivateActiveItem.js":
/*!*********************************************!*\
  !*** ./js/services/deactivateActiveItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deactivateActiveItem(nodeList, className) {
    let arrFromNodeList = Array.from(nodeList);

    arrFromNodeList.forEach(item => {
        item.classList.remove(className)
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deactivateActiveItem);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: data
    });

    console.log('result-->', result);

    return await result.json();
};

const getResource = async (url) => {
    const result = await fetch(url);
    
    if(!result.ok){
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
};



/***/ }),

/***/ "./js/services/toggleActiveItem.js":
/*!*****************************************!*\
  !*** ./js/services/toggleActiveItem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//!!!универсальная функция переключения активного класса между элементами!!!
function toggleActiveItem(e, itemSelector, activeClass) {
    if(e.target && e.target.classList.contains(itemSelector)){
        const [...items] = e.target.parentElement.querySelectorAll(`.${itemSelector}`);

        items.forEach(item => {
            item.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);
    }
}
//!!!универсальная функция переключения активного класса между элементами!!!

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleActiveItem);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/custom.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");









window.addEventListener('DOMContentLoaded', () => {
    const setModalTimer = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('.modal', setModalTimer), 1000000);


    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__items', '.tabcontent', '.tabheader__item', 'tabheader__item_active');
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2022-12-21');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '.modal', setModalTimer);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
        sliderContainer: '.offer__slider',
        allSlides: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        sliderInner: '.offer__slider-inner',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current'

   });
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__["default"])(setModalTimer, 'form');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map