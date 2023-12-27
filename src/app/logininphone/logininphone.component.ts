import { Component,ViewChild } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logininphone',
  templateUrl: './logininphone.component.html',
  styleUrls: ['./logininphone.component.css']
})
export class LogininphoneComponent {
  @ViewChild('myForm') myForm!: NgForm;

  submitted = false
  minimumNumber = false

  constructor(public service : PopupHandingService , public fb: FormBuilder, public http:HttpClient, public ls:LoginindetailsValueService){}

  value = this.ls.phoneForm?.value || null;

  mobileNumber(){
    if(this.ls.phoneForm.invalid){
      this.minimumNumber = true
      return
    }else{
      this.minimumNumber = false
      return
    }
  }
    
  async submitForm(data:any) {    
   
    this.mobileNumber()
    this.ls.sendotp()
    this.ls.loginprofile(data)
    
    if(this.ls.phoneForm.valid == true){
      this.service.openOtp()
    }else{
      this.submitted = true
      this.minimumNumber = true
      this.mobileNumber()
    }

  }
  get phoneFormControl() {
    return this.ls.phoneForm.controls;
  }

}
