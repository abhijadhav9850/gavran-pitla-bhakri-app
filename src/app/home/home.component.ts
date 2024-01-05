import { DatePipe } from '@angular/common';
import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public service: PopupHandingService, public ls: LoginindetailsValueService, public router:Router) {
    // Retrieve from localStorage
    const retrievedData = localStorage.getItem('user_details');
    if (retrievedData !== null) {
      this.ls.authLoggedIn.next(true)
      // this.ls.profile()
    } else {
      console.log('No data found in localStorage');
    }
  }


}