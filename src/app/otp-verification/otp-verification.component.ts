import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {

  constructor(public service : PopupHandingService , public fb: FormBuilder, public ls:LoginindetailsValueService, public http:HttpClient, public router: Router){
    this.timeout()
   
    
    
  }

  invalid = false
  display: any;
  timer : any = 30;
  spinner = false

  timeout(){
    setTimeout(() => {
    if(this.timer==0){
      console.log('finished');
      
    }
    else if (this.timer >= 0) {
      this.timer--
      this.timeout()
    }
  }, 1000);
  }

    otpForm = this.fb.group({
    number: ['', [Validators.required ,]],
    number2: ['', [Validators.required ,]],
    number3: ['', [Validators.required ,]],
    number4: ['', [Validators.required ,]],
  }); 

  async optverify() {
    // this.service.openAddress()
    // console.log(this.ls.otpvalue);
    this.spinner = true;
    this.ls.profile()
    this.getUserInformation()
    if(this.timer>=0){
      Object.values(this.otpForm.controls).forEach((control) => {
        control.markAsTouched();
      });
  
      let otp = `${this.otpForm.value.number}${this.otpForm.value.number2}${this.otpForm.value.number3}${this.otpForm.value.number4}`
      let obj = Number(otp)   
      this.ls.otpnumber = {
        otp : obj
       }
       
      //  otp verify and go to next page api done
      this.http.post("https://knexdatabase.onrender.com/OTP/GetOTP",this.ls.otpnumber).subscribe((e:any)=>{
      if(e.message == 'OTP Verified Successfully!'){  
        // alert('Otp Verified Successful');
        this.ls.otpVerifyApi()
          this.ls.openAddress()
        this.ls.profile()
        this.ls.userLogin = true;
        console.log("Work");
      }else{
        alert('OTP is not valid');
        // this.authLoggedIn.next(true)
        // this.router.navigate(['order-his'])
      }
      })
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
    if (length == 1) {
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
      this.otpForm.get('number')?.invalid  ||
      this.otpForm.get('number2')?.invalid ||
      this.otpForm.get('number3')?.invalid ||
      this.otpForm.get('number4')?.invalid ||
      this.ls.display == "00:00"
    ) {
      console.log("Invalid values detected");
      this.invalid = true;
    } else {
      console.log("No error, all values are present");
      this.invalid = false;
      this.ls.openAddress()
    }
  }  

  getUserInformation(){
    const retrievedData = localStorage.getItem('user_details');
    if (retrievedData !== null) {
      const userObject = JSON.parse(retrievedData);
      const number = userObject?.mobileno;
    let obj = {
      "Mobile_No" : number
    }
    this.http.post('https://knexdatabase.onrender.com/user/userDetails',obj).subscribe((e:any)=>{
      const userResult = e.result;
      localStorage.setItem('profile', JSON.stringify(userResult));
      console.log('hello...',userResult);
        
    })
  }
  }

}



