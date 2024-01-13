import { DatePipe } from '@angular/common';
import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public service: PopupHandingService, public ls: LoginindetailsValueService, public router:Router) {
    // Retrieve from localStorage
    // setInterval(() => this.getdata(), 1000);
    const retrievedData = localStorage.getItem('user_details');
    if (retrievedData !== null) {
      this.ls.authLoggedIn.next(true)
      // this.ls.profile()
    } else {
      console.log('No data found in localStorage');
    }
  }
  orderList : any = [];
  userId:any;

  async ngOnInit() {

    this.getdata()

    this.ls.getData().subscribe(
      (data: any) => {
        this.orderList = data.Result;
        // console.log('heee',this.orderList[this.orderList.length-1].status);
        this.userId = this.orderList.length
        console.log(this.orderList);
        
       this.cancelorder()
        
      },
      (error) => {
        console.error(error);
        // Handle errors if needed
      }
    );
  }

  getdata(){
    this.ls.getData().subscribe(
      (data: any) => {
        this.orderList = data.Result;
        // console.log('heee',this.orderList[this.orderList.length-1].status);
      
        // console.log(this.orderList);
        
       this.cancelorder()
        
      },
      (error) => {
        console.error(error);
        // Handle errors if needed
      }
    );
  }
  
  cancelorder(){
    for(let i = 0; i < this.orderList.length;i++){
      // console.log(this.userId,this.orderList[i].status);
      
      if(this.orderList[i].status == 'Pending'){

        this.userId = this.orderList[i].id
        this.ls.show_home_popup = true
        
      }
      else if (this.orderList[i].status == 'Cancel' ){
        // this.userId = this.orderList[i].id
        // this.ls.show_home_popup = false
        console.log("else condition was true");
        
      }
    }
   this.modify()
  }

  detailes(){
    if(this.ls.profilepoPup == true){
      this.ls.withoutUserLoginBackBtn()
    }else{
      this.router.navigate(['details']);
    }
  }

  modify(){
    let  orders = this.orderList.length
    for(let i = 0; i < this.orderList.length;i++){
      if(this.orderList[i].status == 'Pending'){
        this.ls.foodorderdata = this.orderList[i]
      }
    }

  }

}