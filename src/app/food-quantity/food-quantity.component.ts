import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';


@Component({
  selector: 'app-food-quantity',
  templateUrl: './food-quantity.component.html',
  styleUrls: ['./food-quantity.component.css']
})
export class FoodQuantityComponent {

  constructor(public service : PopupHandingService){
    
  }


 visible:any= false;
onclick(){
  // this.visible=!this.visible
// console.log(this.visible=!this.visible);
// {this.visible?"bottom-[0%]":"top-0"}


}
  

}
