import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {  

  orderList:any = []

  constructor(public ls : LoginindetailsValueService, public http:HttpClient,public router:Router){
    
  }

  async ngOnInit() {
    this.ls.getData().subscribe(
      (data: any) => {
        this.orderList = data.Result;
        // console.log(this.orderList);
        
      },
      (error) => {
        console.error(error);
        // Handle errors if needed
      }
    );
  }
  // orderDate = new Date();
  // orderTimestamp = Date.now();
  // orderDate1 = new Date(this.orderTimestamp);
  orderHistory:any=[]

  
  pushValue(i:any){
    console.log(this.orderList[i]);
    this.ls.foodorderdata = this.orderList[i]
    this.router.navigate(['order-info'])
    this.orderList[i]
    console.log("food quantity value",this.ls.foodorderdata);
 
  }

}
