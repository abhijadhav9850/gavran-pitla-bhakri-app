import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupHandingService {

  constructor() {
  
   }

  
  hide : any = false;
  otp :any = false;
  address : any = false;

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
    'transform': 'translateY(10%)',
    'box-shadow' : '0px 0px 20px lightgray',
    'z-index': '-1',
    'background-color' : '#fff',
    'overflow' : 'auto',

  };

  changeStyle() {
    this.hide =!this.hide
    // Change the style dynamically
    setTimeout(()=>{  
      
      this.backgroundblur = {
        'background' : 'linear-gradient(rgba(0, 0, 0, -8.46),rgba(0, 0, 0, -8.46),url(../../assets/image 2.jpg)',
        'filter' : 'blur(4px)'
      }
      
      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transition': 'transform 0.3s ease-in-out',
        'transform': 'translateY(-85.5%)',
        'box-shadow' : '0px 0px 20px gray',
        'z-index': '1',
        'background-color' : '#fff',
        'overflow' : 'hidden',
      };
  }, 10);
  }

    closepopup(){
      
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
     
    }, 500);
    }

    openOtp(){
      this.otp = false;
    }
    openAddress(){
      this.address = false;
    }

    closeOtp(){
      this.otp = false;
    }
    
    


}
