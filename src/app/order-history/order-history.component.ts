import { Component } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {  

  constructor(public data : LoginindetailsValueService){

  }

  currentDate = new Date();

}
