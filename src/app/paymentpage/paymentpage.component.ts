import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent {
 
  constructor(public service : PopupHandingService, public router:Router){ }

  seleted = true
  selectPayment(){
    if(this.seleted == true){
      this.router.navigate(['/user-payment']);
    }else{
      this.router.navigate(['/order-his']);
    }
    this.service.closepopup()
  }
}
