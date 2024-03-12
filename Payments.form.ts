import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from './Base.form';
import { textValidator } from '../validators/custom-text.validator';

export class PaymentForm extends Base {

    private frm: FormGroup = this.createForm();
    
    constructor(
        public fb: FormBuilder,
    ) {
        super(fb);
    }
   
     public createForm(): FormGroup {
          return this.fb.group({
            name: ['', [Validators.required, textValidator, Validators.maxLength(30)]],
            surname: ['', [Validators.required, textValidator, Validators.maxLength(30)]],
            account: ['', [Validators.required, , Validators.maxLength(26)]],
            amount: ['', [Validators.required, Validators.maxLength(26)]],
            payment_date: ['', [Validators.required, Validators.maxLength(12)]],
            payment_purpose: ['', [Validators.required, Validators.maxLength(255)]]
        });
        return this.form;
    }

    get name() {
        return this.form.get('name');
    }

    get surname() {
        return this.form.get('surname');
    }

    get account() {
        return this.form.get('account');
    }

    get amount() {
        return this.form.get('amount');
    }

    get payment_date() {
        return this.form.get('payment_date');
    }

    get payment_purpose() {
        return this.form.get('payment_purpose');
    }
    get form(): FormGroup {
        return this._form;
    }

    set form(value: FormGroup) {
        this._form = value;
    }

}
