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

  show_home_popup = false

  foodquantity:any = [
   { bhakri : this.bhakriquantity,
     pithla : this.pithlaquantity,
     test : '',
     totalPrice : this.orderPrice,
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

  // getOrderPrice(){
  //   console.log(this.orderPrice);
  // }
  // getUserInformation(){}
}
