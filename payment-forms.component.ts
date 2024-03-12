import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { ErrorMsgService } from '../../services/error-msg.service';
import { PaymentForm } from '../../forms/Payments.form';

@Component({
  selector: 'app-payment-forms',
  templateUrl: './payment-forms.component.html',
  styleUrls: ['./payment-forms.component.css']
})

export class PaymentFormsComponent extends BaseComponent  implements OnInit {

  public paymentForm: paymentForm = new paymentForm(this.fb);
  
  constructor(
    private fb: FormBuilder,
    private vs: ErrorMsgService,
  ) {
    super(vs);
  }

  ngOnInit() {
  }
}
