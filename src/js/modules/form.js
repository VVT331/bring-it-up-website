export default class Forms {
    constructor(formSelector, url = '') {
        this.forms = document.querySelectorAll(formSelector);
        this.url = url;
    }

    init() {
        this.collectData();
        this.validEmail();
        this.validNumber();
    }

    collectData() {
        this.forms.forEach(form => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(form);

                const res = await this.postData(formData, form);
                console.log(res);

            });
        });

    }

    async postData(data, form) {

        try {
            const response = await fetch(this.url, {
                method: 'POST',
                body: data
            });

            return await response.json();

        } catch (error) {
            console.error(error);
        } finally {
            this.clearInput(form);
        }
    }

    clearInput(form) {
        const inputs = form.querySelectorAll('input')
        inputs.forEach(input => {
            input.value = '';
        });
    }

    validEmail() {
        const pattern = /[^a-z A-Z 0-9 @ \.]/ig;

        this.forms.forEach(form => {
            const input = form.querySelector('[name="email"]');
            input.addEventListener('input', () => {
                input.value = input.value.replace(pattern, '');
            });
        });
    }

    validNumber() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();

            let inputCoord = elem.selectionStart;

            if (elem.setSelectionRange) {
                if (inputCoord < 2) {
                    elem.setSelectionRange(2, 2)
                } else {
                    elem.setSelectionRange(pos, pos)
                }

            } else if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };

        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            this.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this)
            }

        }

        let input = document.querySelector('[name="phone"]');

        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);

        input.addEventListener('click', createMask);
        input.addEventListener('keyup', createMask);
    }
}