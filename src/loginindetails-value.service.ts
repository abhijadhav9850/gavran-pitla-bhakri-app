import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginindetailsValueService {

  constructor(public http: HttpClient, public fb: FormBuilder, public router: Router) { }

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
    console.log(this.foodquantity);
    
    await this.http.post("http://localhost:4000/OTP/GetOTP", this.otpnumber).subscribe(async (e: any) => {
      if (e.message === 'Otp not valid') {
        console.log('OTP is not valid');
      } else {
        console.log('Otp successful');
        console.log("Work");
        this.order_list()

        // mobile no add api

        //  await this.http.post("http://localhost:4000/Mobile_No/Add",this.adddata).subscribe(e=>{
        //        console.log(e); 
        //     })  

        // // foodquantity data api
        // await this.http.post("http://localhost:4000/Order_Details", this.foodquantity).subscribe(e => {
        //          console.log(e); 
        //       })  


        

          this.authLoggedIn.next(true)
          // this.router.navigate(['order-his'])
        }
    })
  }

  // getOrderPrice(){
  //   console.log(this.orderPrice);
  // }
  // getUserInformation(){}


  addorder_data() {

  }
}
