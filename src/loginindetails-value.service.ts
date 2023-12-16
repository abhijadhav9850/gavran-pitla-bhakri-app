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


  sendotp(){
     this.http.post("https://gavranpitlabhakri-database.onrender.com/Mobile_No/Send_OTP",this.adddata).subscribe((e:any)=>{
      console.log(e);
   })
  }

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
    await this.http.post("https://gavranpitlabhakri-database.onrender.com/Mobile_No/No_Add", this.adddata).subscribe(e => {
      console.log(e);
    })

    // // foodquantity data api done
    await this.http.post("https://gavranpitlabhakri-database.onrender.com/OrderData/Details", this.foodquantity).subscribe(e => {
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

 
  Test_newapi() {
    // UserData collect in frontend
    let User_Data = this.http.get("https://gavranpitlabhakri-database.onrender.com/Get_userData").subscribe(e => {
      console.log(e);
    })

    // Mobile_No Data collect in frontend
    let MobileNo_Data = this.http.get("https://gavranpitlabhakri-database.onrender.com/Get_Mobile_No").subscribe(e => {
      console.log(e);
    })

    this.http.get<any[]>("https://gavranpitlabhakri-database.onrender.com/Get_OrderData").subscribe(e => {
      console.log(e);
    })


    // Mobile_No Data collect in frontend
    
  }

  getData() {
    return this.http.get<any[]>("https://gavranpitlabhakri-database.onrender.com/Get_OrderData");
  }
}
