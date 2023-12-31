import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent {

  constructor(public service : PopupHandingService , public router:Router, public ls:LoginindetailsValueService){}

  seleted = false

  selectedOption: string = ''; // Variable to store the selected option

  selectOption(option: string) {
    this.selectedOption = option;
    console.log(`Selected option: ${this.selectedOption}`);
    // You can perform further actions with the selected value here
  }


  backToPaymentPopup(){
    this.router.navigate(['/details']);
    this.ls.changeStyle()
    this.ls.popup_quantity = false
    this.ls.popup_contact  = false;
    this.ls.otp = false;
    this.ls.address  = false;
    this.ls.payment  = true;
  }

  navigateToHome(){
    if(this.seleted == false){
      this.router.navigate(['']); 
      // this.ls.Test_newapi()
      this.ls.show_modify_popup()


    }
  }
}
