
import validator from 'validator';
export default class Login {
    constructor (formClassLogin) {
        this.form = document.querySelector(formClassLogin)
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;
        
        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }
        console.log(emailInput.value, passwordInput.value);
    }
}