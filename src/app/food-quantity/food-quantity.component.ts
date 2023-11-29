import { Component } from '@angular/core';

@Component({
  selector: 'app-food-quantity',
  templateUrl: './food-quantity.component.html',
  styleUrls: ['./food-quantity.component.css']
})
export class FoodQuantityComponent {

  visible:any=false;

  onclick(){
    this.visible=!this.visible
  }
}
