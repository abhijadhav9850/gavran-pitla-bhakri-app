import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(public ls:LoginindetailsValueService, public router:Router, public fb: FormBuilder, public http: HttpClient,public location: Location){}

  userName:any 
  getData:any = localStorage.getItem('user_details')
  userData = JSON.parse(this.getData)
  user_token:any;
  Email = '@gmail.com'
  registerId:any;
  usercity:any;
  userAddress:any;

  ngOnInit(){
    const retrievedData = localStorage.getItem('profile');
    if (retrievedData !== null) {
      // Parse the JSON string into a JavaScript object
      const userObject = JSON.parse(retrievedData);
      // Access the register_id property
      this.registerId = userObject?.mobileno;
      this.user_token = userObject?.register_id;
      this.userName = userObject?.username;
      this.userAddress = userObject?.useraddress;
      this.usercity = userObject?.usercity;

    } else {
      console.log('User details not found in localStorage.');
      return; // Exit function if user details are not found
    }
  }

  citys: any = [
    { name: 'Vashi', value: 'Vashi' },
    { name: 'Sanpada', value: 'Sanpada' },
    { name: 'koperkhairane', value: 'koperkhairane' },
    { name: 'Ghansoli', value: 'Ghansoli' },
    { name: 'Airoli', value: 'Airoli' },
  ]

  zoom = {
    transition: 'transform .5s',
    transform: 'none',
    'margin-top' : '0px',
  }

  zoomimage(){
    this.zoom = {
      'transition': 'transform 1s',
      'transform': 'scale(1.9)',
      'margin-top' : '45%',
    }
  }

  myForm = this.fb.group({
    UserName: [ [Validators.required]],
    UserNumber: [, [Validators.required]],
    Usercity: [ [Validators.required]],
    UserAddress:[[Validators.required]]
  });

  edit = false

  hideInput(){
    this.edit = !this.edit
    this.myForm.patchValue({
      UserName: this.userName,
      UserNumber: this.registerId,
      Usercity: this.usercity,
      UserAddress: this.userAddress
      
    })
  }

  // name:string = '';
  // number:any;
  // email:any;

  log:any=''

  editValue() {
    console.log(this.myForm.value);
    let user = {
      UserName: this.myForm.value.UserName,
      UserNumber: this.myForm.value.UserNumber,
      Usercity: this.myForm.value.Usercity,
      UserAddress: this.myForm.value.UserAddress,
      register_id: this.user_token
    }
    console.log(user);
    
    this.http.post('http://localhost:4000/updateUser', user).subscribe((e: any) => {
      if (e.message === 'User Updated Successfully!') {
        console.log(e);
        localStorage.removeItem('profile');
        this.ls.profile()
        setTimeout(() => {
          const retrievedData = localStorage.getItem('profile');
          if (retrievedData !== null) {
            // Parse the JSON string into a JavaScript object
            const userObject = JSON.parse(retrievedData);
            // Access the register_id property
            this.registerId = userObject?.mobileno;
            this.user_token = userObject?.register_id;
            this.userName = userObject?.username;
            this.usercity = userObject?.usercity;
            this.userAddress = userObject?.useraddress;
            this.edit = false;
          }
        }, 1000);
      }
    })
  }

  logout(){
     localStorage.removeItem('user_details');
     localStorage.removeItem('userName')
     localStorage.removeItem('profile')
     this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
