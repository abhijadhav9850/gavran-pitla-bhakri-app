import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginindetailsValueService {
 
constructor(public http:HttpClient) { 
 
}


 
  logindeatilsvalue:any=[];

  otpvalue:any;
  
  


}
