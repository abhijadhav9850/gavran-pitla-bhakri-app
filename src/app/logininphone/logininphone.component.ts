import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { LoginLogoutService } from '../login-logout.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logininphone',
  templateUrl: './logininphone.component.html',
  styleUrls: ['./logininphone.component.css']
})
export class LogininphoneComponent {

  submited = false
  // emailsend:any=this.service.email
  // phoneForm: FormGroup;
  constructor(public service : PopupHandingService , public fb: FormBuilder, public http:HttpClient, public ls:LoginindetailsValueService,public router: Router, public log:LoginLogoutService){
    // this.phoneForm = this.fb.group({
    //   email: ['', [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)] ],
    // });
  }

  submitForm() {
    Object.values(this.ls.phoneForm.controls).forEach((control) => {
      control.markAsTouched();
    });
    this.submited = true
    this.ls.callapi()
    //  console.log(this.data);    
    // if (this.phoneForm.valid) {
    //   const formData = { Email_ID: this.phoneForm.value.email };
    //   // console.log(formData);
    //   this.http.post("http://localhost:4000/User/EmailID",formData).subscribe(e => {
    //    this.ls.otpvalue=e
    //    this.ls.apicall()
    //   }) 
    // }
  }
  
  
  phoneNumber = '';
  requestOtp(): void {
    this.log.requestOtp(this.phoneNumber)
      .subscribe((response: any) => {
        if (response.success) {
          // Redirect to OTP verification page
          this.router.navigate(['/otp-verification', this.phoneNumber]);
        } else {
          console.error('Failed to send OTP');
        }
      });
  }

}
