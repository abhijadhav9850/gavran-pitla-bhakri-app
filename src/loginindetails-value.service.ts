import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, filter, of } from 'rxjs';
import { PopupHandingService } from './popup-handing.service';


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
  userOrderData = []
  show_home_popup = false;
  userLogin = false;
  orderdata:any;
  // foodList:any;

  counter1= 0;
  counter2=0;

  orderDate = new Date();
  


  isUserLogin() {
    if (localStorage.getItem('user_details')) {
      this.userLogin = true
      // this.show_home_popup = true
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
    await this.http.post("https://knexdatabase.onrender.com/Mobile_No/Send_OTP", formData).subscribe((e: any) => {
      console.log(e);
    })
    // this.phoneForm.reset()
  }

  order_list() {
    this.orderlist.push(this.foodorderdata)
    console.log('mayuri',this.orderlist);
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
      const userApiResponse: any = await this.http.post("https://knexdatabase.onrender.com/Mobile_No/Add_User", this.adddata).toPromise();
      if (userApiResponse.message == 'User already exists in the database!') {
        if(this.counter1 != 0 ){
          setTimeout(()=>{  
            this.profile()
        }, 2000);
          this.withoutUserLoginBackBtn()
          this.userLogin = true
        }else if(this. counter2 != 0){
          this.openPayment()
        }
        
      // this.router.navigate(['/payment']);  
        
      }
  
      if (userApiResponse !== undefined && userApiResponse.result !== undefined) {
        const userResult = userApiResponse.result;
        localStorage.setItem('user_details', JSON.stringify(userResult));
        this.authLoggedIn.next(true);
        this.addOrders();
      } else {
        console.error('Invalid User API response:', userApiResponse);
      }

      this.authLoggedIn.next(true)
        if (this.authLoggedIn.getValue() === true) {
          const retrievedData = localStorage.getItem('token');
          return this.authLoggedIn.next(true)
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
      "totalprice": this.foodorderdata.totalprice,
      "register_id": registerId,
      "status": "Pending",
      "datetime": this.orderDate 
    };
    // Food quantity data API
    const orderApiResponse = await this.http.post("https://knexdatabase.onrender.com/OrderData/Details", foodList).subscribe();
    console.log(orderApiResponse);
    console.log("heello", foodList);
    this.orderdata=foodList
  }

  updatestatus(){

  // let statusupdate = {
  //   status:this.foodorderdata.status,
  //   register_id: this.foodorderdata.register_id
  // }
  // console.log('aj',this.foodorderdata.id);
  
  this.http.post('https://knexdatabase.onrender.com/update/updatestatus',this.foodorderdata).subscribe((e:any)=>{
    console.log('kkk',e);
  })
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
      return this.http.post<any[]>("https://knexdatabase.onrender.com/getData", number);
    } else {
      console.log('No data found in localStorage');
      return of([]);
    }
  }

  profile() {
    const retrievedData = localStorage.getItem('user_details');
    if (retrievedData !== null) {
      const userObject = JSON.parse(retrievedData);
      const number = userObject?.mobileno;
    let obj = {
      "Mobile_No" : number
    }
    this.http.post('https://knexdatabase.onrender.com/user/userDetails',obj).subscribe((e:any)=>{
      const userResult = e.result;
      console.log(userResult);
      
      localStorage.setItem('profile', JSON.stringify(userResult));
      // console.log('Its works!!!',userResult);
    })
  }
  }

  getpitla() {
    return this.http.get<any[]>("https://knexdatabase.onrender.com/getpitla")
  }

  // -----popup handling----

  email = '';
  
  popup_hide : any = false;
  popup_quantity:any = false
  popup_contact : any = false;
  popup_otp :any = false;
  popup_address : any = false;
  popup_payment : any = false;

  backgroundblur = {
    'filter' : 'blur(0px)',
    'transition' : '0.1s ease-in-out',
    'background' : 'none'
  }

  otpPopup = {
    'width' : '100%',
    'transition': 'transform 0.4s ease-in-out',
    'margin-top': '50vh',
    'box-shadow' : '0px 0px 20px black',
    'z-index': '-1',
    'background-color' : '#fff',
    'overflow' : 'auto',
  }

  loginInPhone = {
    // display :'none',
    // backgroundColor: 'lightblue',
    // color: 'black',
    'width' : '100%',
    'transition': 'margin-top 0.5s ease-in-out',
    'margin-top': '50vh',
    'box-shadow' : '',
    'z-index': '-1',
    'background-color' : '#fff',
    'overflow' : 'auto',

  };

  changeStyle() {
    this.popup_hide = true
    this.popup_quantity = true
    this.counter2 = 1;
    // Change the style dynamically
    setTimeout(()=>{  
      this.backgroundblur = {
        'filter' : 'blur(2px)',
        'transition' : '0.1s ease-out',
        'background' : 'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3),url(../../assets/image 2.jpg))',
      }
      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transition': 'margin-top 0.1s ease-out',
        'margin-top': '-60vh',
        'box-shadow' : '0px 0px 900px 900px rgba(0,0,0,0.2)',
        'z-index': '1',
        'background-color' : '#fff',
        'overflow' : 'hidden',
      };
  }, 10);
  }

    closepopup(){
      // this.quantity = false
      // this.contact  = false;
      // this.otp = false;
      // this.address  = false;
      // this.payment  = false;

      this.backgroundblur = {
        'filter' : 'blue(0px)',
        'transition' : '0.1s ease-in-out',
        'background' : 'none'
      }
      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transition': 'margin-top 0.1s ease-in-out',
        'margin-top': '10vh',
        'box-shadow' : '0px 0px 10px lightgray',
        'z-index': '1',
        'background-color' : '#fff',
        'overflow' : 'hidden',
      };
      this.backgroundblur = {
        'filter' : 'none',
        'transition' : '0.1s ease-in-out',
        'background' : 'none'
      }

      setTimeout(()=>{  
      this.popup_hide = false
      this.popup_quantity = false
      this.popup_contact  = false;
      this.otp = false;
      this.address  = false;
      this.payment  = false;
     
    }, 500);
    }

    showProfile(){
      this.popup_hide = true
      this.popup_contact = true
   
      this.counter1 = 1;
      
      setTimeout(()=>{  
        this.backgroundblur = {
          'filter' : 'blur(2px)',
          'transition' : '0.1s ease-out',
          'background' : 'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3),url(../../assets/image 2.jpg))',
        }
        this.loginInPhone = {
          // display: 'flex',
          // backgroundColor: 'lightgreen',
          // color: 'white',
          'width' : '100%',
          'transition': 'margin-top 0.1s ease-out',
          'margin-top': '-12vh',
          'box-shadow' : '0px 0px 900px 900px rgba(0,0,0,0.2)',
          'z-index': '1',
          'background-color' : '#fff',
          'overflow' : 'hidden',
        };
    }, 10);
    }

    withoutUserLoginBackBtn(){
      this.counter1 = 1
      this.backgroundblur = {
        'filter' : 'blue(0px)',
        'transition' : '0.1s ease-in-out',
        'background' : 'none'
      }
      this.loginInPhone = {
        // display: 'flex',
        // backgroundColor: 'lightgreen',
        // color: 'white',
        'width' : '100%',
        'transition': 'margin-top 0.1s ease-in-out',
        'margin-top': '50vh',
        'box-shadow' : '0px 0px 10px lightgray',
        'z-index': '1',
        'background-color' : '#fff',
        'overflow' : 'hidden',
      };
      this.backgroundblur = {
        'filter' : 'none',
        'transition' : '0.1s ease-in-out',
        'background' : 'none'
      }

      setTimeout(()=>{  
      this.popup_hide = false
      this.popup_quantity = false
      this.popup_contact  = false;
      this.otp = false;
      this.address  = false;
      this.payment  = false;
     
    }, 500);
    }

    openOtp(){
      this.otp = true;
      this.popup_contact = false
    }
    openAddress(){
        this.address = true;
        this.otp = false  
    }
    
    openContact(){
      if(localStorage.getItem('user_details')){
    
        this.popup_quantity = false
        this.popup_contact  = false;
        this.otp = false;
        this.address  = false;
        this.payment  = false;
        this.openPayment()
      }else{
        this.popup_quantity = false;
        this.popup_contact = true;
      }
    }
    openPayment(){
      if(this.counter1 > 0){
        this.withoutUserLoginBackBtn()
        this.counter1 = 0;
      }else if (this.counter2 > 0){
        this.payment = true;
        this.address = false
        this.counter2 = 0;
      }
    }

    closeOtp(){
      this.otp = false;
      this.popup_contact = true;
    }
    
    closepayment(){
      if(localStorage.getItem('user_details')){
        this.popup_quantity = true
        this.popup_contact  = false;
        this.otp = false;
        this.address  = false;
        this.payment  = false;
      }else{
        this.payment = false;
        this.address = true;
      }
    }
    closeContact(){
      if(this.userLogin == true){
        this.popup_contact = false;
        this.popup_quantity = true;
      }else{
        this.withoutUserLoginBackBtn()
      }
    }
    closeAddress(){
      this.address = false;
      this.otp = true;
    }
}



// popup service code

