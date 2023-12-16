import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logininphone',
  templateUrl: './logininphone.component.html',
  styleUrls: ['./logininphone.component.css']
})
export class LogininphoneComponent {

  submitted = false

  constructor(public service : PopupHandingService , public fb: FormBuilder, public http:HttpClient, public ls:LoginindetailsValueService){}

  phoneForm = this.fb.group({
      Mobile_No: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    })
  
  
  async submitForm() {
    if(this.phoneForm.valid == true){
      this.service.openOtp()
      const formData = {
        // ID:2,
        Mobile_No: this.phoneForm.value.Mobile_No
      }
      this.ls.adddata = formData
      // mobile no to send otp api done
      console.log(this.ls.adddata);
      
      await this.http.post("https://gavranpitlabhakri-database.onrender.com/Mobile_No/Send_OTP",formData).subscribe((e:any)=>{
         console.log(e);
         if(e.message === "SMS sent successfully"){
          this.ls.timer(1)
         }
      })
  
        // this.phoneForm.reset()
    }else{
      this.submitted = true
    }

  }
  get phoneFormControl() {
    return this.phoneForm.controls;
  }

}
