import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginindetailsValueService {

  constructor(public http: HttpClient, public fb: FormBuilder, public router: Router) { }

  display: any;

  adddata: any=''
  otpnumber: any;
  bhakriquantity: any = "";
  pithlaquantity: any = "";
  orderPrice: any = "";
  address: any = false;
  payment: any = false;
  otp: any = false;
  authLoggedIn = new BehaviorSubject<boolean>(false);

  show_home_popup = false

  phoneForm = this.fb.group({
    Mobile_No: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  })

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

  async sendotp(){
     let formData = {
         Mobile_No: this.phoneForm.value.Mobile_No
       }
       this.adddata = formData
    console.log(formData);
     await this.http.post("https://gavranpitlabhakri-database.onrender.com/Mobile_No/Send_OTP",formData).subscribe((e:any)=>{
    console.log(e);
   })
    // this.phoneForm.reset()
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
    await this.http.post("https://gavranpitlabhakri-database.onrender.com/Mobile_No/No_Add", this.adddata).subscribe((e:any) => {
      // Convert array to Set to ensure uniqueness
      // const uniqueMobileNumbers = [...new Set(e.mobileNumbers)];

      // // Store in localStorage
      // localStorage.setItem('uniqueMobileNumbers', JSON.stringify(uniqueMobileNumbers));
      
      // // Retrieve from localStorage
      // const retrievedData = localStorage.getItem('uniqueMobileNumbers');
      // if (retrievedData !== null) {
      //   const parsedData = JSON.parse(retrievedData);
      //   console.log(parsedData); // This will contain unique mobile numbers if retrievedData is not null
      // } else {
      //   console.log('No data found in localStorage');
      // }
      this.authLoggedIn.next(true)

    })

    // // foodquantity data api done
    await this.http.post("https://gavranpitlabhakri-database.onrender.com/OrderData/Details", this.foodquantity).subscribe(e => {
      console.log(e);
    })
    // this.Test_newapi()
    // this.router.navigate(['order-his'])
    // }
    // })
  }

  // getOrderPrice(){
  //   console.log(this.orderPrice);
  // }
  // getUserInformation(){}

 
  async Test_newapi() {
    // UserData collect in frontend
    let User_Data =await this.http.get("https://gavranpitlabhakri-database.onrender.com/Get_userData").subscribe(e => {
      console.log(e);
    })

    // Mobile_No Data collect in frontend
    let MobileNo_Data =await this.http.get("https://gavranpitlabhakri-database.onrender.com/Get_Mobile_No").subscribe(e => {
      console.log(e);
    })

    await this.http.get<any[]>("https://gavranpitlabhakri-database.onrender.com/Get_OrderData").subscribe(e => {
      console.log(e);
    })


    // Mobile_No Data collect in frontend
    
  }

  getData() {
    return this.http.get<any[]>("https://gavranpitlabhakri-database.onrender.com/Get_OrderData");
  }
}
