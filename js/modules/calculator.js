function calculator() {
    const toggleActiveItem = require('../services/toggleActiveItem');

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