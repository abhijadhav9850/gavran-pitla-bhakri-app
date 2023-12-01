import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupHandingService {

  constructor() { }

  
  hide : any = false
  otp :any =false
  address : any = false



  loginInPhone = {
    // display :'none',
    // backgroundColor: 'lightblue',
    // color: 'black',
    'width' : '100%',
    'transform': 'translateY(10%)',
    'transition' : 'margin-top 1s',
    'box-shadow' : '0px 0px 20px lightgray',
    'z-index': '-1',
    'background-color' : '#fff',
    'overflow' : 'auto',

  };

  changeStyle() {
    this.hide =!this.hide
    // Change the style dynamically
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transform': 'translateY(-96.5%)',
        'transition': 'margin-top 0.5s',
        'box-shadow' : '0px 0px 20px gray',
        'z-index': '1',
        'background-color' : '#fff',
        'overflow' : 'hidden'
      };
  }, 10);

  }

    closepopup(){
      this.hide =!this.hide;

      this.loginInPhone = {
        // display :'none',
        // backgroundColor: 'lightblue',
        // color: 'black',
        'width' : '100%',
        'transform': 'translateY(10%)',
        'transition' : 'margin-top 1s',
        'box-shadow' : '0px 0px 20px lightgray',
        'z-index': '-1',
        'background-color' : '#fff',
        'overflow' : 'auto',
    
      };


    


    }



}
