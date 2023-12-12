import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent {

  constructor(public service : PopupHandingService , public router:Router){}

  backToPaymentPopup(){
    this.router.navigate(['/details']);
    this.service.changeStyle()
    this.service.quantity = false
    this.service.contact  = false;
    this.service.otp = false;
    this.service.address  = false;
    this.service.payment  = true;
  }
}
