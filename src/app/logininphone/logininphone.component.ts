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
  minimumNumber = false

  constructor(public service : PopupHandingService , public fb: FormBuilder, public http:HttpClient, public ls:LoginindetailsValueService){}

  mobileNumber(){
    if(this.ls.phoneForm.value>'10'){
      this.minimumNumber = true
    }else{
      console.log("more then 10 numbers");  
      this.minimumNumber = false
    }
  }
    
  async submitForm() {
    this.mobileNumber()
    this.ls.sendotp()
    
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
