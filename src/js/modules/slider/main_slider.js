import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(wrapper, btns) {
        super(wrapper, btns);
    }

    init() {
        this.switchSlide();
    }

    showSlide(index) {

        this.slideIndex = index;

        if (index < 0) {
            this.slideIndex = this.slides.length - 1;
        }

        if (index > this.slides.length - 1) {
            this.slideIndex = 0;
        }

        try {
            this.timeEl = this.slides[this.slideIndex].querySelector('.hanson');
            this.timeEl.style.display = 'none';
            if (this.slideIndex === 2) {
                this.showTimer(this.timeEl, 3000);
            } else {
                this.timeEl.classList.add('slideInUp');
            }
        } catch (e) { }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex].style.display = 'block';
    }

    switchSlide() {
        let logo;

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.showSlide(this.slideIndex + 1)
            });

            logo = btn.parentNode.previousElementSibling;
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 0
                this.showSlide(this.slideIndex);
            });
        });
    }

    showTimer(el, time) {
        setTimeout(() => {
            el.classList.add('animated', 'slideInUp');
            el.style.display = 'block';
        }, time);
    }
}