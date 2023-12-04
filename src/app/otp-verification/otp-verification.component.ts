import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {

  invalid = false

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

  move(e: any, p: any, c: any, n: any) {
    let length = c.value.length;
    let maxlength = 1;
    if (length == maxlength) {
      if (n != '') {
        n.focus()
      }
    }
    if(e.key === 'Backspace'){
      if(p != ""){
        p.focus();
      }
    }
  }

  nextpopup() {
    if (
      this.otpForm.get('number1')?.invalid ||
      this.otpForm.get('number2')?.invalid ||
      this.otpForm.get('number3')?.invalid ||
      this.otpForm.get('number4')?.invalid
    ) {
      console.log("Invalid values detected");
      this.service.address = false;
      this.invalid = true;
    } else {
      console.log("No error, all values are present");
      this.invalid = false;
      this.service.address = true;
    }
  }
  


}
