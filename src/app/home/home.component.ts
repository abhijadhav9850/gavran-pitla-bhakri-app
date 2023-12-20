import { Component, } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public service: PopupHandingService, public ls: LoginindetailsValueService) {
    // Retrieve from localStorage
    const retrievedData = localStorage.getItem('token');
    if (retrievedData !== null) {
      this.ls.authLoggedIn.next(true)
      this.ls.profile()
      console.log("h");
    } else {
      console.log('No data found in localStorage');
    }
  }


}