window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
        cards = require('./modules/cards'),
        timer = require('./modules/timer'),
        modal = require('./modules/modal'),
        slider = require('./modules/slider'),
        calculator = require('./modules/calculator'),
        forms = require('./modules/forms')
    ;

    tabs();
    cards();
    timer();
    modal();
    slider();
    calculator();
    forms();
});