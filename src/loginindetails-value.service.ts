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
    number: ['',[Validators.required, Validators.pattern("[0-9]{10}")]],
  })

  otpvalue:any;
  callapi(){
    console.log(this.phoneForm.value);
    
    const formData = { Mobile_No: this.phoneForm.value.number}
    this.http.post("http://localhost:4000/User/Mobile_No",formData).subscribe(e=>{
      // this.otpvalue = e
       console.log(e); 
    })
  
    
  }
}
