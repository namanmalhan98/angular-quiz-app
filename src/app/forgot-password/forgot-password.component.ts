import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  // isLinear = false;

  @Output() onEmailSubmit: EventEmitter<string> = new EventEmitter();
  @Output() onCodeSubmit = new EventEmitter();

  @Input()
  emailSubmitted: boolean = false;

  @Input()
  passwordResetSuccessful: boolean = false;

  emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  confirmCodeForm: FormGroup = this.createCodeForm();

  constructor(private _formBuilder: FormBuilder) { }
  // firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  // secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
  }

   submitEmail() {
    debugger;
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')!.value;
      this.confirmCodeForm.setValue({
        email,
        newPassword: '',
        confirmationCode: '',
      });
      this.confirmCodeForm = this.createCodeForm(email);
      //console.log('THE EMAIL IS: ', this.confirmCodeForm.get('email').value);
      this.onEmailSubmit.emit(email);
    }
  }

  submitCode() {
    debugger;
    if (this.confirmCodeForm.valid) {
      this.onCodeSubmit.emit(this.confirmCodeForm.value);
    }
  }

  createCodeForm(email: string = ''): FormGroup {
    return new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email]),
      newPassword: new FormControl('', [Validators.required]),
      confirmationCode: new FormControl('', [Validators.required]),
    });
  }

}
