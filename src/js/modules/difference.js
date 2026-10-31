export default class Difference {
    constructor(officerold, officernew, elements) {
        this.officerold = document.querySelector(officerold);
        this.officernew = document.querySelector(officernew);
        this.elementsSel = elements;
        this.countOld = 0;
        this.countNew = 0;
    }

    init() {

        this.hideElements(this.officerold, this.countOld);
        this.hideElements(this.officernew, this.countNew);

    }

    hideElements(parentSelector, count) {
        const elements = parentSelector.querySelectorAll(this.elementsSel);
        let trigger;

        elements.forEach((el, index, arr) => {
            if (index !== arr.length - 1) {
                el.style.display = 'none';
            } else {
                el.style.display = 'flex';
                trigger = el;
                this.trigger(parentSelector, count, trigger);
            }
        });
    }

    trigger(parentSelector, count, trigger) {
        const elements = parentSelector.querySelectorAll(this.elementsSel);

        trigger.addEventListener('click', () => {
            if (count !== elements.length - 1) {
                elements[count].style.display = 'flex';
                count++;
            }
            if (count === 3) {
                trigger.style.display = 'none';
            }
        });
    }
}