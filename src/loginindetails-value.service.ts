import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class LoginindetailsValueService { 

  constructor(public http:HttpClient, public fb:FormBuilder) { }

  logindeatilsvalue:any=[];
  orderPrice : any= [];
  userinformation : any = [];

  getOrderPrice(){
    console.log(this.orderPrice);
  }
  getUserInformation(){}
  phoneForm = this.fb.group({
    Mobile_No: ['',[Validators.required, Validators.pattern("[0-9]{10}")]],
  })

  otpvalue:any;
  async callapi(){
    console.log(this.phoneForm.value);    
    const formData = { Mobile_No: this.phoneForm.value.Mobile_No}
  
    await this.http.post("http://localhost:4000/Mobile_No/Send_OTP",formData).subscribe(e=>{
      // this.otpvalue = e
       console.log(e); 
    })
  
    await this.http.post("http://localhost:4000/Mobile_No/Add",formData).subscribe(e=>{
      // this.otpvalue = e
       console.log(e); 
    })  
  }
}
