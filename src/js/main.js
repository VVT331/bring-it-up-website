"use strict";

import MainSlider from "./modules/slider/main_slider";
import SupSlider from "./modules/slider/support_slider";
import Video from "./modules/video";
import Difference from "./modules/difference";
import Forms from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({ wrapper: '.page', btns: '.next' }).init(),

        showUpSlider = new SupSlider({
            wrapper: '.showup__content-slider',
            next: '.showup__next',
            prev: '.showup__prev',
            activeClass: 'card-active',
            animation: true
        })
            .init(),

        slickSlider = new SupSlider({
            wrapper: '.modules__content-slider',
            next: '.slick-next',
            prev: '.slick-prev',
            activeClass: 'card-active',
            animation: true,
            timer: true
        })
            .init(),

        feedSlider = new SupSlider({
            wrapper: '.feed__wrapper',
            next: '.feed-next',
            prev: '.feed-prev',
            activeClass: 'feed__item-active',
            animation: true
        })
            .init();

    const video = new Video('.play', '.overlay').init();

    const difference = new Difference('.officerold', '.officernew', '.officer__card-item').init();

    const form = new Forms('.form', './assets/question.php').init();
});