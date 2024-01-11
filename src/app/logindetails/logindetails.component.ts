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

  constructor(public service : PopupHandingService , public fb: FormBuilder, public ls:LoginindetailsValueService,public http:HttpClient, public data : LoginindetailsValueService){
    this.ls.profile()
    console.log("Hello world!!");
    
  }

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
    this.ls.profile()
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
      this.ls.openPayment()
      this.getUserValue()
    }
    // console.log(this.myForm.value);
    
    this.ls.userData = localStorage.setItem('userName', JSON.stringify(this.myForm.value.UserName))
  }

  getUserValue(){
    const retrievedData = localStorage.getItem('user_details');
    if (retrievedData !== null) {
      // Parse the JSON string into a JavaScript object
      const userObject = JSON.parse(retrievedData);
      // Access the register_id property
      const registerId = userObject?.register_id;
      const number = userObject?.mobileno;
      let userDetails = {
        "username": this.myForm.value.UserName,
        "useraddress": this.myForm.value.UserAddress,
        "usercity": this.myForm.value.UserCity,
        "register_id": registerId
      }  
      this.http.post('https://databaseknex.onrender.com/user/addDetails',userDetails).subscribe((e:any)=>{
        if(e.message == "User Data Added Successfully!"){
          console.log(e);
          this.ls.profile()
        }
      })
    } else {
      console.log('User details not found in localStorage.');
    }
  }

  get myFormControl() {
    return this.myForm.controls;
  }
}
