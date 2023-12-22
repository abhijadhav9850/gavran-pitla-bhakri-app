import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { PopupHandingService } from 'src/popup-handing.service';


@Component({
  selector: 'app-food-quantity',
  templateUrl: './food-quantity.component.html',
  styleUrls: ['./food-quantity.component.css']
})
export class FoodQuantityComponent {

  constructor(public http: HttpClient, public service: PopupHandingService, public data: LoginindetailsValueService) { }

  bhakri = 2;
  pithla = 1;
  bhakriPrice = 50;
  pithlaPrice = 50;
  thechaPrice = 0;
  onionPrice = 0;
  orderdata:any;

  seleted: any = true;

  bhakriIncrement() {
    if (this.bhakri > 0) {
      this.bhakri++;
      this.bhakriPrice = this.bhakriPrice + 25
      this.data.bhakriquantity = this.bhakri
    }


  
  }
  bhakriDecrement() {
    if (this.bhakri > 1) {
      this.bhakri--;
      this.bhakriPrice = this.bhakriPrice - 25
    }
  }

  pithlaIncrement() {
    if (this.pithla > 0) {
      this.pithla++;
      this.pithlaPrice = this.pithlaPrice + 50
    }
  }
  pithlaDecrement() {
    if (this.pithla > 1) {
      this.pithla--;
      this.pithlaPrice = this.pithlaPrice - 50
      // console.log(this.pithla);
    }
  }

  pushValueToService() {
    let totalValue = this.bhakriPrice + this.pithlaPrice + this.thechaPrice + this.onionPrice
    
     this.orderdata = {
      bhakri: this.bhakri,
      pithla: this.pithla,
      test: '',
      totalPrice: totalValue,
    }

    if (this.seleted == true) {
      this.orderdata.test = "Medium"
    } else {
      this.orderdata.test = "Spicy"
    }

    this.data.foodorderdata = this.orderdata

  }

  

 

}