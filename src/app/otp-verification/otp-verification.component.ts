import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {

  constructor(public service : PopupHandingService){
    
  }

}
