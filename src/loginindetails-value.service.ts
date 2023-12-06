import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginindetailsValueService {
 
constructor(public http:HttpClient, public fb:FormBuilder) { 
 
}
 
logindeatilsvalue:any=[];

  phoneForm = this.fb.group({
    email: ['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]],
  })

  otpvalue:any;
  callapi(){
    const formData = { Email_ID: this.phoneForm.value.email}
    this.http.post("http://localhost:4000/User/EmailID",formData).subscribe(e=>{
      this.otpvalue = e
      console.log(e); 
    })
  }
}
