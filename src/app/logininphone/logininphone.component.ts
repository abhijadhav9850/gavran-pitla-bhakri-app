import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';


@Component({
  selector: 'app-logininphone',
  templateUrl: './logininphone.component.html',
  styleUrls: ['./logininphone.component.css']
})
export class LogininphoneComponent {

  submitted = false

  constructor(public service : PopupHandingService , public fb: FormBuilder, public http:HttpClient, public ls:LoginindetailsValueService){
  }

  phoneForm = this.fb.group({
      Mobile_No: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    })
  
  
  async submitForm() {
    
    // console.log(this.phoneForm.valid);
    
    if(this.phoneForm.valid == false){
      this.submitted = true
    }else{
      this.submitted = false;
      console.log(this.phoneForm.value);
    }


    // console.log(this.phoneForm.value);

    const formData = {
      Mobile_No: this.phoneForm.value.Mobile_No
    }
  
    await this.http.post("http://localhost:4000/Mobile_No/Send_OTP",formData).subscribe(e=>{
       console.log(e); 
    })

    await this.http.post("http://localhost:4000/Mobile_No/Add",formData).subscribe(e=>{
           console.log(e); 
        })  

      this.phoneForm.reset()

  }

  get phoneFormControl() {
    return this.phoneForm.controls;
  }

}
