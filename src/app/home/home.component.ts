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

  
  cancelorder(){
    for(let i = 1; i < this.orderList.length+1;i++){
      if(this.orderList[i].status == 'Pending'){
        console.log("Pending order", this.orderList[i].id);
        this.userId = this.orderList[i].id
        this.ls.show_home_popup = true
      }else if (this.orderList.length == 0){
        this.ls.show_home_popup = false
        console.log("else condition was true");
        
      }


    }
   
  }
}