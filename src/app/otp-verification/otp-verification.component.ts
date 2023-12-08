import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { LoginLogoutService } from '../login-logout.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {

  invalid = false
  otparr = []
  phoneNumber: string;
  otp2 = '';

  otpForm: FormGroup;
  constructor(public service : PopupHandingService , public fb: FormBuilder, public ls:LoginindetailsValueService, public login:LoginLogoutService, public active:ActivatedRoute, public router:Router){
    this.otpForm = this.fb.group({
      number: ['', [Validators.required ,]],
      number2: ['', [Validators.required ,]],
      number3: ['', [Validators.required ,]],
      number4: ['', [Validators.required ,]],
    });
    this.phoneNumber = this.active.snapshot.params['phoneNumber'];
  }

  
  verifyOtp(): void {
    this.login.verifyOtp(this.otp2)
      .subscribe((response: any) => {
        if (response.success) {
          // Redirect to the main application page
          this.router.navigate(['/home']);
        } else {
          console.error('OTP verification failed');
        }
      });
  }



  submitForm() {
    // console.log(this.ls.otpvalue);
    
    Object.values(this.otpForm.controls).forEach((control) => {
      control.markAsTouched();
    });
    this.otparr = this.otpForm.value    
  console.log(this.otparr);
  // this.ls.callapi()
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
      this.otpForm.get('number')?.invalid ||
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
