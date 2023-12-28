import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(public ls:LoginindetailsValueService, public router:Router){
   
  }

  userName = localStorage.getItem('userName');
  userContact = localStorage.getItem('token')

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
     localStorage.removeItem('token');
     localStorage.removeItem('userName')
   this.router.navigate([''])
   window.location.reload()
  }
}
