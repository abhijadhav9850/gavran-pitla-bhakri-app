import { Component } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent {
  constructor(public ls:LoginindetailsValueService){}

}
