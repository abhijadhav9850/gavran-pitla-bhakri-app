import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupHandingService {


  email = '';


  constructor() {
  
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
    'transform': 'translateY(10%)',
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
    'transition': 'transform 0.5s ease-in-out',
    'transform': 'translateY(20%)',
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
        'filter' : 'blur(4px)',
        'background' : 'linear-gradient(rgba(0, 0, 0,  0.54),rgba(0, 0, 0, -8.46)),url(../../assets/image 2.jpg)',
      }
      
      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transition': 'transform 0.3s ease-in-out',
        'transform': 'translateY(-85%)',
        'box-shadow' : '0px 0px 20px gray',
        'z-index': '1',
        'background-color' : '#fff',
        'overflow' : 'hidden',
      };
  }, 10);
  }

    closepopup(){
      this.quantity = false
      this.contact  = false;
      this.otp = false;
      this.address  = false;
      this.payment  = false;

      this.backgroundblur = {
        'filter' : 'blue(0px)',
        'background' : 'none'
      }

      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transition': 'transform 0.3s ease-in-out',
        'transform': 'translateY(20%)',
        'box-shadow' : '0px 0px 5px ',
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
      this.otp = false;
    }
    openAddress(){
      this.address = false;
    }
    openContact(){
      this.quantity = false;
      this.contact = true;

    }

    closeOtp(){
      this.otp = false;
      this.contact = false;
    }
    
    closepayment(){
      this.payment = false;
    }

    closeContact(){
      this.contact = false;
      this.quantity = true
    }


}
