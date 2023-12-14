import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {  

  orderList:any = []

  constructor(public ls : LoginindetailsValueService, public http:HttpClient){
  }

  async ngOnInit() {
    this.ls.getData().subscribe(
      (data: any[]) => {
        this.orderList = data;
        console.log(this.orderList);
        
      },
      (error) => {
        console.error(error);
        // Handle errors if needed
      }
    );
  
  }
  currentDate = new Date();

  pastHIstory:any=[
    {
      bhakri: 4,
      pithla: 2,
      test: 'Spicy',
      totalPrice: 200,
    },
    {
      bhakri: 4,
      pithla: 2,
      test: 'Spicy',
      totalPrice: 200,
    },
    {
      bhakri: 4,
      pithla: 2,
      test: 'Spicy',
      totalPrice: 200,
    },
    {
      bhakri: 4,
      pithla: 2,
      test: 'Spicy',
      totalPrice: 200,
    },
    {
      bhakri: 4,
      pithla: 2,
      test: 'Spicy',
      totalPrice: 200,
    },

  ]

}
