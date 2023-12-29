import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(public ls:LoginindetailsValueService, public router:Router, public fb: FormBuilder){}

  userName:any 
  getData:any = localStorage.getItem('user_details')
  userData = JSON.parse(this.getData)
  userContact:any;
  Email = '@gmail.com'
  registerId:any;

  ngOnInit(){
    const retrievedData = localStorage.getItem('profile');
    if (retrievedData !== null) {
      // Parse the JSON string into a JavaScript object
      const userObject = JSON.parse(retrievedData);
      // Access the register_id property
      this.registerId = userObject?.mobileno;
      this.userContact = this.registerId;
      this.userName = userObject?.username;

    } else {
      console.log('User details not found in localStorage.');
      return; // Exit function if user details are not found
    }
  }

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
    UserEmail: [ [Validators.required]],
  });

  edit = false

  hideInput(){
    this.edit = !this.edit
    this.myForm.patchValue({
      UserName: this.userName,
      UserNumber: this.registerId,
      UserEmail: this.userName
    })
  }

  // name:string = '';
  // number:any;
  // email:any;

  log:any=''

  editValue(){
    this.edit = false;
    console.log(this.myForm.value);

  }

  logout(){
     localStorage.removeItem('user_details');
     localStorage.removeItem('userName')
     this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
