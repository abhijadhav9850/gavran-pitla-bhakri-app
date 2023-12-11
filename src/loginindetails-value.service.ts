import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupHandingService } from './popup-handing.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class LoginindetailsValueService { 
  
  constructor(public http:HttpClient, public fb:FormBuilder, public router: Router) {}
  
  otpnumber:any;
  bhakriquantity:any = "";
  pithlaquantity:any = "";
  orderPrice : any= "";
  address : any = false;
  payment : any = false;
  otp :any = false;
  authLoggedIn = new BehaviorSubject<boolean>(false);


  foodquantity:any = [
   { bhakri : this.bhakriquantity,
     pithla : this.pithlaquantity,
     totalPrice : this.orderPrice  
  }
  ]

  orderlist : any = [

  ]

  logindeatilsvalue:any=[];
  userinformation : any = [];
 

  order_list(){
    this.orderlist.push(this.foodquantity)
    console.log(this.orderlist);
    
  }

  

   otpverifyapi(){
    this.http.post("http://localhost:4000/OTP/GetOTP",this.otpnumber).subscribe((e:any)=>{
    if(e.message === 'Otp not valid'){
      console.log('OTP is not valid');
    }else{
      console.log('Otp successful');
      this.address = true;
      this.otp = false
      console.log("Work");
      
      this.authLoggedIn.next(true)
      this.router.navigate(['order-his'])
    }
    })
   }

  // getOrderPrice(){
  //   console.log(this.orderPrice);
  // }
  // getUserInformation(){}
}
