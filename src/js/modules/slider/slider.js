export default class Slider {
    constructor({ wrapper = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animation = false,
        timer = false,
    } = null) {
        this.wrapper = document.querySelector(wrapper);
        this.slides = Array.from(this.wrapper.children);
        this.btns = this.wrapper.querySelectorAll(btns);
        this.slideIndex = 0;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.activeClass = activeClass;
        this.animation = animation;
        this.timer = timer;
    }
}