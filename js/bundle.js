/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function calculator() {
    const toggleActiveItem = __webpack_require__(/*! ../services/toggleActiveItem */ "./js/services/toggleActiveItem.js");

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
        toggleActiveItem(e, 'calculating__choose-item', 'calculating__choose-item_active');

        checkSex(e);
    });
    calculatingActivity.addEventListener('click', (e) => {
        toggleActiveItem(e, 'calculating__choose-item', 'calculating__choose-item_active');

        checkActivity(e);
    });
}

module.exports = calculator;

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((module) => {

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




    const getResource = async (url) => {
        const result = await fetch(url);
        
        if(!result.ok){
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    };


    // getResource('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({img, title, descr, price}) => {
    //         new DailyMenu(img, title, descr, price, '.menu__field .container').renderDailyMenu();
    //     });
    // })
    // .catch(() => {
    //     console.error('error');
    // })

    // axios.get('http://localhost:3000/menu')
    // .then(response => {
    //     response.data.forEach(({img, title, descr, price}) => {
    //         new DailyMenu(img, title, descr, price, '.menu__field .container').renderDailyMenu();
    //     });
    // })
}

module.exports = cards;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

function forms() {
    //forms
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

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

            
            postData('http://localhost:3000/requests', json)
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
        openModal();

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
            closeModal();
        }, 1000);
    }
}


module.exports = forms;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
    //MODAL
    const modal = document.querySelector('.modal'),
        modalOpenBtn = document.querySelectorAll('[data-modal]')
    ;

    function showModalByScroll() {
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // window.addEventListener('scroll', showModalByScroll);

    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        clearInterval(setModalTimer);
    }

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    modalOpenBtn.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    const setModalTimer = setTimeout(openModal, 1000000);

    

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if(e.target.matches('.modal') || e.target.getAttribute('data-close') == ''){
            closeModal();
        }
    });
}

module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function slider() {
    const deactivateActiveItem = __webpack_require__(/*! ../services/deactivateActiveItem */ "./js/services/deactivateActiveItem.js"),
        toggleActiveItem = __webpack_require__(/*! ../services/toggleActiveItem */ "./js/services/toggleActiveItem.js")
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

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function tabs() {
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

    const deactivateActiveItem = __webpack_require__(/*! ../services/deactivateActiveItem */ "./js/services/deactivateActiveItem.js");

    //tabs 2 variant
    const tabheader__items = document.querySelector('.tabheader__items');
    const tabcontent = document.querySelectorAll('.tabcontent');

    tabheader__items.addEventListener('click', (e) => {
        if(e.target && e.target.matches('div.tabheader__item')){
            const item = tabheader__items.querySelectorAll('.tabheader__item');

            deactivateActiveItem(item, 'tabheader__item_active');

            tabcontent.forEach(tab => {
                tab.classList.remove('active');
                tab.classList.add('fade');

                if(e.target.textContent === tab.getAttribute('data-name')){
                    e.target.classList.add('tabheader__item_active');
                    tab.classList.toggle('active');
                }
            });
        }
    });

    // function deactivateActiveItem(nodeList, className) {
    //     let arrFromNodeList = Array.from(nodeList);

    //     arrFromNodeList.forEach(item => {
    //         item.classList.remove(className)
    //     });
    // }
}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
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
    let endDate = '2022-12-21';
    // let endDate = '2022-02-24';


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

        // console.log(Date.parse(deadline));
        // console.log(Date.parse(new Date()));


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

            // console.log(endTime, remainingDays, remainingHours, remainingMinutes, remainingSeconds);

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

    showDate('.timer', endDate);
}

module.exports = timer;

/***/ }),

/***/ "./js/services/deactivateActiveItem.js":
/*!*********************************************!*\
  !*** ./js/services/deactivateActiveItem.js ***!
  \*********************************************/
/***/ ((module) => {

function deactivateActiveItem(nodeList, className) {
    let arrFromNodeList = Array.from(nodeList);

    arrFromNodeList.forEach(item => {
        item.classList.remove(className)
    });
}

module.exports = deactivateActiveItem;

/***/ }),

/***/ "./js/services/toggleActiveItem.js":
/*!*****************************************!*\
  !*** ./js/services/toggleActiveItem.js ***!
  \*****************************************/
/***/ ((module) => {

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

module.exports = toggleActiveItem;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/custom.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
        calculator = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js"),
        forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js")
    ;

    tabs();
    cards();
    timer();
    modal();
    slider();
    calculator();
    forms();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map