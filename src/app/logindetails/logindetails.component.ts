import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { Subscriber } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent {
  myForm: FormGroup;
  
  
  constructor(public service : PopupHandingService , public fb: FormBuilder, public ls:LoginindetailsValueService,public http:HttpClient){
    this.myForm = this.fb.group({
      UserName: ['', [Validators.required]],
      UserAddress: ['', [Validators.required]],
      UserCity: ['', [Validators.required]],
    });

  }
  submitForm() {
    Object.values(this.myForm.controls).forEach((control) => {
      control.markAsTouched();
      console.log(this.myForm)
    });

    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    }
  }
  valueget(){
    this.ls.logindeatilsvalue.push(this.myForm.value)   
    console.log(this.ls.logindeatilsvalue);

    this.http.post('http://localhost:4000/User/Add',this.myForm.value).subscribe(e=>{
      console.log(e);
      
    })

     
  }
}
