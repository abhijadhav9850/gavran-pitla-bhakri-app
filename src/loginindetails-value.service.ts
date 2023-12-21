import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, filter, of } from 'rxjs';

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
     await this.http.post("https://sample-pithla-bhakri.onrender.com/Mobile_No/Send_OTP",formData).subscribe((e:any)=>{
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
    await this.http.post("https://sample-pithla-bhakri.onrender.com/Mobile_No/No_Add", this.adddata).subscribe((e:any) => {
      // Convert array to Set to ensure uniqueness
      // console.log(e);
      
      // const uniqueMobileNumbers = [...new Set(e.message)];
      // console.log(uniqueMobileNumbers);

      // // Store in localStorage
      localStorage.setItem('uniqueMobileNumbers', JSON.stringify(e.message));
      
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
    await this.http.post("https://sample-pithla-bhakri.onrender.com/OrderData/Details", this.foodquantity).subscribe(e => {
      console.log(e);
    })
    // this.Test_newapi()
    // this.router.navigate(['order-his'])
    // }
    // })
  }

  // no use this code 

  // getOrderPrice(){
  //   console.log(this.orderPrice);
  // }
  // getUserInformation(){}

   
  async Test_newapi() {
    // UserData collect in frontend
    await this.http.get("https://sample-pithla-bhakri.onrender.com/Get_userData").subscribe(e => {
      console.log(e);
    })

    // Mobile_No Data collect in frontend
    await this.http.get("https://sample-pithla-bhakri.onrender.com/Get_Mobile_No").subscribe(e => {
      console.log(e);
    })

    await this.http.get<any[]>("https://sample-pithla-bhakri.onrender.com/Get_OrderData").subscribe(e => {
      console.log(e);
    }) 


    // Mobile_No Data collect in frontend
    
  }

  getData(): Observable<any[]> {
    // Retrieve from localStorage
    const retrievedData = localStorage.getItem('uniqueMobileNumbers');

    if (retrievedData !== null) {
      const parsedData = JSON.parse(retrievedData);
      const number = {
        Mobile_No: parsedData
      }
      console.log(parsedData);
      return this.http.post<any[]>("https://sample-pithla-bhakri.onrender.com/getData", number);
    } else {
      console.log('No data found in localStorage');
      // Handle the case where no data is found, either by returning a default value or handling it differently
      // In this example, we return an observable that emits an empty array
      return of([]);
    }
  }


  getpitla(){
    return this.http.get<any[]>("https://sample-pithla-bhakri.onrender.com/getpitla")
  }
}
