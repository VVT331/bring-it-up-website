import Slider from "./slider";

export default class SupSlider extends Slider {
    constructor(wrapper, next, prev, activeClass, animation, timer) {
        super(wrapper, next, prev, activeClass, animation, timer);
    }

    init() {

        if (this.wrapper.classList.contains('feed__wrapper')) {
            this.wrapper.style.cssText = `
        display: flex; 
        overflow: hidden; 
        flex-wrap: wrap;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 10;
        `;
        } else {
            this.wrapper.style.cssText = `
        display: flex; 
        overflow: hidden; 
        flex-wrap: wrap;
        `;
        }

        if (this.timer) {
            this.timerSlide(5000);
        }

        this.trigger();
    }

    trigger() {
        this.next.addEventListener('click', () => {
            let save = this.wrapper.firstElementChild;

            this.wrapper.append(save);
            if (this.animation) {
                this.decor(this.wrapper.firstElementChild);
            }

        });

        this.prev.addEventListener('click', () => {
            let save = this.wrapper.lastElementChild;
            this.wrapper.prepend(save);
            if (this.animation) {
                this.decor(save);
            }
        });
    }

    timerSlide(time) {
        setInterval(() => {
            let save = this.wrapper.firstElementChild;

            this.wrapper.append(save);
            if (this.animation) {
                this.decor(this.wrapper.firstElementChild);
            }
        }, time);
    }

    decor(element) {
        const counts = this.wrapper.querySelectorAll('.card__controls-count'),
            titles = this.wrapper.querySelectorAll('.card__title'),
            arrows = this.wrapper.querySelectorAll('.card__controls-arrow'),
            desrs = this.wrapper.querySelectorAll('.card__description');

        const countMain = element.querySelector('.card__controls-count'),
            titleMain = element.querySelector('.card__title'),
            arrowMain = element.querySelector('.card__controls-arrow'),
            desr = element.querySelector('.card__description');

        function defaultStyle(elements, value) {
            elements.forEach(el => {
                el.style.opacity = value;
            });
        }

        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
        });

        defaultStyle(counts, 0.4);
        defaultStyle(titles, 0.4);
        defaultStyle(arrows, 0);
        defaultStyle(desrs, 0);

        element.classList.add(this.activeClass);

        if (countMain && titleMain && arrowMain) {
            countMain.style.opacity = '1';
            titleMain.style.opacity = '1';
            arrowMain.style.opacity = '1';
        }
        if (desr) {
            desr.style.opacity = '1';
        }
    }
}