import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent {
 
  constructor(public service : PopupHandingService, public router:Router, public ls:LoginindetailsValueService){ }

  cash=''
  seleted = false
  selectPayment(){
    if(this.seleted == true){
      this.router.navigate(['/user-payment']);
    }else{
      this.router.navigate(['']);
      this.ls.show_modify_popup()
    }
    this.service.closepopup()
  }
}
