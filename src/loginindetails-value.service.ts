import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class LoginindetailsValueService { 

  constructor(public http:HttpClient, public fb:FormBuilder) { }

  logindeatilsvalue:any=[];
  orderPrice : any= [];
  userinformation : any = [];
 

  getOrderPrice(){
    console.log(this.orderPrice);
  }
  // getUserInformation(){}
}
