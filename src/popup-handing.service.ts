import { Injectable } from '@angular/core';
import { LoginindetailsValueService } from './loginindetails-value.service';

@Injectable({
  providedIn: 'root'
})
export class PopupHandingService {


  email = '';


  constructor(public login : LoginindetailsValueService) {
  
   }

  
  hide : any = false;
  quantity:any = false
  contact : any = false;
  otp :any = false;
  address : any = false;
  payment : any = false;

  backgroundblur = {
    'filter' : 'blue(0px)',
    'background' : 'none'
  }


  otpPopup = {
    'width' : '100%',
    'transition': 'transform 0.5s ease-in-out',
    'margin-top': '50vh',
    'box-shadow' : '0px 0px 20px lightgray',
    'z-index': '-1',
    'background-color' : '#fff',
    'overflow' : 'auto',
  }

  loginInPhone = {
    // display :'none',
    // backgroundColor: 'lightblue',
    // color: 'black',
    'width' : '100%',
    'transition': 'margin-top 0.5s ease-in-out',
    'margin-top': '50vh',
    'box-shadow' : '',
    'z-index': '-1',
    'background-color' : '#fff',
    'overflow' : 'auto',

  };

  changeStyle() {
    this.hide = true
    this.quantity = true
    // Change the style dynamically
    setTimeout(()=>{  
      
      this.backgroundblur = {
        'filter' : 'blur(5px)',
        'background' : 'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3),url(../../assets/image 2.jpg))',
      }
      
      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transition': 'margin-top 0.3s ease-in-out',
        'margin-top': '-60vh',
        'box-shadow' : '0px 0px 50px gray',
        'z-index': '1',
        'background-color' : '#fff',
        'overflow' : 'hidden',
      };
  }, 10);
  }

    closepopup(){
      // this.quantity = false
      // this.contact  = false;
      // this.otp = false;
      // this.address  = false;
      // this.payment  = false;

      this.backgroundblur = {
        'filter' : 'blue(0px)',
        'background' : 'none'
      }

      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transition': 'margin-top 0.3s ease-in-out',
        'margin-top': '10vh',
        'box-shadow' : '0px 0px 10px lightgray',
        'z-index': '1',
        'background-color' : '#fff',
        'overflow' : 'hidden',
      };

      this.backgroundblur = {
        'filter' : 'none',
        'background' : 'none'
      }

      setTimeout(()=>{  
      this.hide = false
      this.quantity = false
      this.contact  = false;
      this.otp = false;
      this.address  = false;
      this.payment  = false;
     
    }, 500);
    }

    openOtp(){
      this.otp = true;
      this.contact = false
    }
    openAddress(){
      this.address = true;
      this.otp = false
    }
    
    openContact(){
      this.quantity = false;
      this.contact = true;
    }
    openPayment(){
      this.payment = true;
      this.address = false
    }

    closeOtp(){
      this.otp = false;
      this.contact = true;
    }
    
    closepayment(){
      this.payment = false;
      this.address = true;
    }
    closeContact(){
      this.contact = false;
      this.quantity = true;
    }
    closeAddress(){
      this.address = false;
      this.otp = true;
    }


}
