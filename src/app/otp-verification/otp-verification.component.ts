import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otpForm: FormGroup;
  constructor(public service : PopupHandingService , public fb: FormBuilder){
    this.otpForm = this.fb.group({
      number: ['', [Validators.required ,]],
      number2: ['', [Validators.required ,]],
      number3: ['', [Validators.required ,]],
      number4: ['', [Validators.required ,]],
    });
  }
  submitForm() {
    Object.values(this.otpForm.controls).forEach((control) => {
      control.markAsTouched();
    });

    if (this.otpForm.valid) {
      console.log('Form submitted:', this.otpForm.value);
    }
  }

  otp: string[] = ['', '', '', ''];

  onInput(index: number) {
    const nextIndex = index < this.otp.length ? index + 1 : index;
    if (nextIndex < this.otp.length) {
      const nextInput = document.getElementById(`otp${nextIndex}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
}
