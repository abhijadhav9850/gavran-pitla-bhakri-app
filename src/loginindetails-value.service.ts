import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class LoginindetailsValueService { 

  constructor(public http:HttpClient, public fb:FormBuilder) {}

  bhakriquantity:any = "";
  pithlaquantity:any = "";
  orderPrice : any= "";
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
    this.show_modify_popup()
  }
  
  show_modify_popup(){
    if(this.show_home_popup == false){
      this.show_home_popup = true
    }else{
      this.show_home_popup = false
    }
  }

  // getOrderPrice(){
  //   console.log(this.orderPrice);
  // }
  // getUserInformation(){}
}
