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

  // myForm: FormGroup;
  submitted = false


  constructor(public service : PopupHandingService , public fb: FormBuilder, public ls:LoginindetailsValueService,public http:HttpClient, public data : LoginindetailsValueService){}

  isOpen: boolean = false;

toggleDropdown() {
  this.isOpen = !this.isOpen;
}


  citys: any[] = [
    { name: 'Vashi', value: 'Vashi' },
    { name: 'Sanpada', value: 'Sanpada' },
    { name: 'koperkhairane', value: 'koperkhairane' },
    { name: 'Ghansoli', value: 'Ghansoli' },
    { name: 'Airoli', value: 'Airoli' },
  ]

  myForm = this.fb.group({
    UserName: ['', [Validators.required]],
    UserAddress: ['', [Validators.required]],
    UserCity: ['', [Validators.required]],
  });

  submitForm() {
    Object.values(this.myForm.controls).forEach((control) => {
      control.markAsTouched();
      console.log(this.myForm)
    });
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    }

    if(this.myForm.valid == false){
      this.submitted = false
    }else{
      this.submitted = true;
      this.service.openPayment()
      this.valueget()
      console.log(this.myForm.value);
    }
    // console.log(this.myForm.value);
    
  }

  valueget(){  
    console.log(this.ls.foodquantity);
    this.http.post('https://gavranpitlabhakri-database.onrender.com/User/Add',this.myForm.value).subscribe(e=>{
      console.log(e);
    })
  }

  get myFormControl() {
    return this.myForm.controls;
  }
}
