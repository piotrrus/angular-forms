import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { ErrorMsgService } from '../../services/error-msg.service';
import { PaymentForm } from '../../forms/Payments.form';

// import {PatternsLibraryService} from '../../services/pattern-library.service';


@Component({
  selector: 'app-payment-forms',
  templateUrl: './payment-forms.component.html',
  styleUrls: ['./payment-forms.component.css']
})

export class PaymentFormsComponent extends BaseComponent  implements OnInit {

  public paymentForm: PaymentForm;
  //validationService: ErrorMsgService;

  constructor(
    private fb: FormBuilder,
    private vs: ErrorMsgService,
  ) {
    super(vs);
    this.paymentForm = new PaymentForm(fb);
  }

  ngOnInit() {
  }

  /*private createForms(): void {
    this.paymentForm = this.fb.group({
      payments: this.fb.array([])
    });
  }*/

  /*get payments(): FormArray {
    return this.paymentForm.get('payments') as FormArray;
  }*/

  /*public addPayment(): void {
    let singlePaymentForm = this.fb.group({
      pepData: this._pep.createForm(),
        //fatherName: ['', [Validators.maxLength(15), textValidator]],
        //motherName: ['', [Validators.maxLength(15), textValidator]]
    });

    // do formy !!
    this.handleSinglePaymentForm(singlePrincipalForm); //

    this.payments.push(singlePaymentForm);
}*/

  // private setValues(data): void {
  //   const formCtrls = this.payments.controls[this.choosenFormId];
  //   const newData = data.attributes;
  //   const contactData = newData.contactData;
  //   const personDocument = newData.personDocument;

  //   formCtrls.get('name').setValue(newData.name);
  // }

  // public getErrorMessage(validatorName) {
  //   return this.validationService.getValidatorErrorMessage(validatorName);
  // }

}
