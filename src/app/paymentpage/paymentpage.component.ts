import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent {
  constructor(public service : PopupHandingService){ }
}
