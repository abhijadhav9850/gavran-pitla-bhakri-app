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
    await this.http.post("http://localhost:4000/Mobile_No/Send_OTP", formData).subscribe((e: any) => {
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

  // async otpVerifyApi() {
  //   this.order_list()
  //   console.log(this.adddata);  


  //   // mobile no add api done
  //   await this.http.post("http://localhost:4000/Mobile_No/Add_User",this.adddata).subscribe((e: any) => {
  //     // // Store in localStorage
  //     localStorage.setItem('user_details', JSON.stringify(e.result));
  //     this.authLoggedIn.next(true)
  //   })

    
    // // foodquantity data api done
    await this.http.post("https://pitlabhakridatabase.onrender.com/OrderData/Details", this.foodorderdata).subscribe(e => {
      console.log(e);
    })
    console.log("hee",this.foodorderdata);
    
    // this.Test_newapi()
    // this.router.navigate(['order-his'])
    // }
    // })
  }



  async Test_newapi() {
    // UserData collect in frontend
     await this.http.get("https://pitlabhakridatabase.onrender.com/Get_userData").subscribe(e => {
      console.log(e);
    })

    // Mobile_No Data collect in frontend
     await this.http.get("https://pitlabhakridatabase.onrender.com/Get_Mobile_No").subscribe(e => {
      console.log(e);
    })

    // await this.http.get<any[]>("https://pitlabhakridatabase.onrender.com/Get_OrderData").subscribe(e => {
    //   console.log(e);
    // })
    // Mobile_No Data collect in frontend
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
      return this.http.post<any[]>("http://localhost:4000/getData", number);
    } else {
      console.log('No data found in localStorage');
      return of([]);
    }
  }

  loginprofile(data: any) {
    // this.http.post("https://pitlabhakridatabase.onrender.com/login", data).subscribe((result: any) => {
    //   localStorage.setItem("token", result.token)
    //   // this.router.navigate(['/'])
    // })
  }

  logout() {
    localStorage.removeItem("token")
  }

  profile() {
    let headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`)
    this.http.post("https://pitlabhakridatabase.onrender.com/profile", {}, { headers }).subscribe((result: any) => {
      this.authLoggedIn.next(true)
      if (this.authLoggedIn.getValue() === true) {
        const retrievedData = localStorage.getItem('token');

        return this.authLoggedIn.next(true)
      }
      
      

    })
  }

  getpitla() {
    return this.http.get<any[]>("https://pitlabhakridatabase.onrender.com/getpitla")
  }
}
