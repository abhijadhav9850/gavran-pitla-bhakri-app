import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(public ls:LoginindetailsValueService, public router:Router){}

  userName = localStorage.getItem('userName');
  userContact:any;

  ngOnInit(){
    const retrievedData = localStorage.getItem('user_details');
    let registerId;
    if (retrievedData !== null) {
      // Parse the JSON string into a JavaScript object
      const userObject = JSON.parse(retrievedData);
      // Access the register_id property
      registerId = userObject?.mobileno;
      this.userContact = registerId
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

  edit = false

  hideInput(){
    this.edit = !this.edit
  }

  name:string = '';
  number:any;
  email:any;

  log:any=''

  editValue(){
    this.edit = false;
    console.log(this.name);
  }

  logout(){
    this.ls.logout()
    localStorage.removeItem('user_details');
    localStorage.removeItem('userName')
    this.router.navigate([''])
    window.location.reload()
  }
}
