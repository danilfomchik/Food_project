import tabs from './modules/tabs';
import cards from './modules/cards';
import timer from './modules/timer';
import modal from './modules/modal';
import slider from './modules/slider';
import calculator from './modules/calculator';
import forms from './modules/forms';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const setModalTimer = setTimeout(() => openModal('.modal', setModalTimer), 1000000);


    tabs('.tabheader__items', '.tabcontent', '.tabheader__item', 'tabheader__item_active');
    cards();
    timer('.timer', '2022-12-21');
    modal('[data-modal]', '.modal', setModalTimer);
    slider({
        sliderContainer: '.offer__slider',
        allSlides: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        sliderInner: '.offer__slider-inner',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current'

   });
    calculator();
    forms(setModalTimer, 'form');
});