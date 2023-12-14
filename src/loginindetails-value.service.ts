import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginindetailsValueService {

  constructor(public http: HttpClient, public fb: FormBuilder, public router: Router) { }

  display: any;

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
      bhakri: this.bhakriquantity,
      pithla: this.pithlaquantity,
      test: '',
      totalPrice: this.orderPrice,
    }


  orderlist: any = []
  userData:any = []

  // logindeatilsvalue: any = [];
  // userinformation: any = [];


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
    this.order_list()

    // mobile no add api done
    await this.http.post("https://database-rn7j.onrender.com/Mobile_No/No_Add", this.adddata).subscribe(e => {
      console.log(e);
    })

    // // foodquantity data api done
    await this.http.post("https://database-rn7j.onrender.com/OrderData/Details", this.foodquantity).subscribe(e => {
      console.log(e);
    })
    this.authLoggedIn.next(true)
    // this.Test_newapi()
    // this.router.navigate(['order-his'])
    // }
    // })
  }

  // getOrderPrice(){
  //   console.log(this.orderPrice);
  // }
  // getUserInformation(){}

  timer(minute: any) {
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

      // console.log(typeof(this.display));
      

      if (seconds == 0) {
        console.log('finished');
        clearInterval(timer);
      }
    }, 1000);
  }

  Test_newapi() {
    // UserData collect in frontend
    let User_Data = this.http.get("http://localhost:4000/Get_userData").subscribe(e => {
      console.log(e);
    })

    // Mobile_No Data collect in frontend
    let MobileNo_Data = this.http.get("http://localhost:4000/Get_Mobile_No").subscribe(e => {
      console.log(e);
    })

    // Mobile_No Data collect in frontend
    
  }

  getData() {
    return this.http.get<any[]>("http://localhost:4000/Get_OrderData");
  }
}
