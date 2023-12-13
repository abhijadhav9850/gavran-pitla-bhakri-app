import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginindetailsValueService {

  constructor(public http: HttpClient, public fb: FormBuilder, public router: Router) { }

  display:any;

  adddata: any;
  otpnumber: any;
  bhakriquantity: any = "";
  pithlaquantity: any = "";
  orderPrice: any = "";
  address: any = false;
  payment: any = false;
  otp: any = false;
  authLoggedIn = new BehaviorSubject<boolean>(false);

  show_home_popup = false

  foodquantity: any = 
    {
      ID: 3,
      bhakri: this.bhakriquantity,
      pithla: this.pithlaquantity,
      test: '',
      totalPrice: this.orderPrice,
    }
  

  orderlist: any = []

  logindeatilsvalue: any = [];
  userinformation: any = [];


  order_list() {
    this.orderlist.push(this.foodquantity)
    console.log(this.orderlist);

  }

  show_modify_popup() {
    if (this.show_home_popup == false) {
      this.show_home_popup = true
    } else {
      this.show_home_popup = false
    }
  }


  async otpverifyapi() {
    // console.log(this.foodquantity);
    
        this.order_list()

        // mobile no add api done

         await this.http.post("http://localhost:4000/Mobile_No/No_Add",this.adddata).subscribe(e=>{
               console.log(e);
            })  

        // // foodquantity data api done

        await this.http.post("http://localhost:4000/OrderData/Details", this.foodquantity).subscribe(e => {
                 console.log(e); 
              })  
          this.authLoggedIn.next(true)
          // this.router.navigate(['order-his'])
        // }
    // })
  }

  // getOrderPrice(){
  //   console.log(this.orderPrice);
  // }
  // getUserInformation(){}


  timer(minute:any) {
    // let minute = 1;
    let seconds: number = minute * 30;
    let textSec: any = '0';
    let statSec: number = 30;

    const prefix = minute < 10 ? '0' : '';

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(timer);
      }
    }, 1000);
  }
  
}
