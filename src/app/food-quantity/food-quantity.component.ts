import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { verbose } from 'sqlite3';

@Component({
  selector: 'app-food-quantity',
  templateUrl: './food-quantity.component.html',
  styleUrls: ['./food-quantity.component.css']
})
export class FoodQuantityComponent {

 visible:any= false;
onclick(){
  // this.visible=!this.visible
console.log(this.visible=!this.visible);
{this.visible?"bottom-[0%]":"top-0"}


}
  

}
