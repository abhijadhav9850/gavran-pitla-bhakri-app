import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent {

  constructor(public location : Location){}

  backButton(){
    this.location.back();
  }

}
