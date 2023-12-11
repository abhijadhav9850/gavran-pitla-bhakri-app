import { Component } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent {
  constructor(public ls: LoginindetailsValueService){

  }

}
