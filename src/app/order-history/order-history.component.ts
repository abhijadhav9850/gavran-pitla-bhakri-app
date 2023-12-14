import { Component } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {  

  constructor(public ls : LoginindetailsValueService){

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
