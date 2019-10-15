import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from './Base.form';

import { textValidator } from '../validators/custom-text.validator';
import { Subscription } from 'rxjs';
// import { PatternsLibraryService } from '../services/pattern-library.service';
/*
import {distinctUntilChanged} from 'rxjs/operators';
import {DistinctService} from '../services/utils/distinct.service';
*/

export class PaymentForm extends Base {

    private _form: FormGroup;
    // private patterns: PatternsLibraryService;

    constructor(
        public fb: FormBuilder,
    ) {
        super(fb);
        this.createForm();
    }
// Validators.pattern(this.patterns['CASH_REGEXP'])
// Validators.pattern('/^[0-9]*$/u')
    createForm(): FormGroup {
        this.form = this.fb.group({
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
