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

  bhakri = 2;
  pithla = 1;
  bhakriPrice = 50;
  pithlaPrice = 50;
  thechaPrice = 0;
  onionPrice = 0;

  bhakriIncrement() {
    if(this.bhakri>0){
      this.bhakri++;
      this.bhakriPrice = this.bhakriPrice + 25
    }
    console.log(this.bhakriPrice + this.pithla + this.pithlaPrice + this.onionPrice);
    
  }
  bhakriDecrement() {
    if(this.bhakri>1){
      this.bhakri--;
      this.bhakriPrice =  this.bhakriPrice - 25

    }
  }

pithlaIncrement() {
  if(this.pithla>0){
    this.pithla++;
    this.pithlaPrice = this.pithlaPrice + 50
  }
}
pithlaDecrement() {
  if(this.pithla>1){
    this.pithla--;
    this.pithlaPrice = this.pithlaPrice - 50
    console.log(this.pithla);
    
  }
  }

 visible:any= false;
onclick(){
  // this.visible=!this.visible
// console.log(this.visible=!this.visible);
// {this.visible?"bottom-[0%]":"top-0"}


}
  

}
