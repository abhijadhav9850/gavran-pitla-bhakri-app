import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, filter, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginindetailsValueService {

  constructor(public http: HttpClient, public fb: FormBuilder, public router: Router) {
    this.isUserLogin()
  }

  display: any;

  adddata: any = ''
  otpnumber: any;
  bhakriquantity: any = "";
  pithlaquantity: any = "";
  orderPrice: any = "";
  address: any = false;
  payment: any = false;
  otp: any = false;
  authLoggedIn = new BehaviorSubject<boolean>(false);
  foodorderdata: any;

  show_home_popup = false

  userLogin = false;

  isUserLogin() {
    if (localStorage.getItem('user_details')) {
      this.userLogin = true
      this.show_home_popup = true
    } else {
      this.userLogin = false
    }

  }

  phoneForm = this.fb.group({
    Mobile_No: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  })

  orderlist: any = []
  userData: any;

  async sendotp() {
    let formData = {
      Mobile_No: this.phoneForm.value.Mobile_No
    }
    this.adddata = formData
    await this.http.post("https://database-hvj5.onrender.com/Mobile_No/Send_OTP", formData).subscribe((e: any) => {
      console.log(e);
    })
    // this.phoneForm.reset()
  }

  order_list() {
    this.orderlist.push(this.foodorderdata)
    console.log(this.orderlist);
  }

  show_modify_popup() {
    if (this.show_home_popup == false) {
      this.show_home_popup = true
    } else {
      this.show_home_popup = false
    }
  }


  //NEW CODE ADDED FOR USER ENTRY AND ORDER VALUES!
  async otpVerifyApi() {
    try {
      await this.order_list();
      console.log(this.adddata);
  
      // Mobile no add API
      const userApiResponse: any = await this.http.post("https://database-hvj5.onrender.com/Mobile_No/Add_User", this.adddata).toPromise();
  
      if (userApiResponse !== undefined && userApiResponse.result !== undefined) {
        const userResult = userApiResponse.result;
        localStorage.setItem('user_details', JSON.stringify(userResult));
        this.authLoggedIn.next(true);
        this.addOrders();
      } else {
        console.error('Invalid User API response:', userApiResponse);
      }
      // this.Test_newapi();
      // this.router.navigate(['order-his']);
    } catch (asyncError) {
      console.error('Async error:', asyncError);
    }
  }

  //ADD ORDERS INTO THE DATABASE!
  async addOrders() {
    // Retrieve register_id from localStorage
    const retrievedData = localStorage.getItem('user_details');
    let registerId;
    if (retrievedData !== null) {
      // Parse the JSON string into a JavaScript object
      const userObject = JSON.parse(retrievedData);
      // Access the register_id property
      registerId = userObject?.register_id;
    } else {
      console.log('User details not found in localStorage.');
      return; // Exit function if user details are not found
    }
    // Prepare data for the next API call
    let foodList = {
      "bhakri": this.foodorderdata.bhakri,
      "pithla": this.foodorderdata.pithla,
      "test": this.foodorderdata.test,
      "totalPrice": this.foodorderdata.totalPrice,
      "register_id": registerId
    };
    // Food quantity data API
    const orderApiResponse = await this.http.post("https://database-hvj5.onrender.com/OrderData/Details", foodList).toPromise();
    console.log(orderApiResponse);
    console.log("hee", foodList);
  }

  getData(): Observable<any[]> {
    // Retrieve from localStorage
    const retrievedData = localStorage.getItem('user_details');
    let registerNumber;
    if (retrievedData !== null) {
      const userObject = JSON.parse(retrievedData);
      registerNumber = userObject?.mobileno;
      const number = {
        Mobile_No: registerNumber
      }
      console.log(number);
      return this.http.post<any[]>("https://database-hvj5.onrender.com/getData", number);
    } else {
      console.log('No data found in localStorage');
      return of([]);
    }
  }

  loginprofile(data: any) {
    this.http.post("https://database-hvj5.onrender.com/login", data).subscribe((result: any) => {
      localStorage.setItem("token", result.token)
      // this.router.navigate(['/'])
    })
  }

  logout() {
    localStorage.removeItem("token")
  }

  profile() {
    let headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`)
    this.http.post("https://database-hvj5.onrender.com/profile", {}, { headers }).subscribe((result: any) => {
      this.authLoggedIn.next(true)
      if (this.authLoggedIn.getValue() === true) {
        const retrievedData = localStorage.getItem('token');
        return this.authLoggedIn.next(true)
      }
    })
  }
}
