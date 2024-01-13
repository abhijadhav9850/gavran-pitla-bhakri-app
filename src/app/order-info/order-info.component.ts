import { Component } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent {
  constructor(public ls: LoginindetailsValueService,public router:Router,public location : Location){ }
  modifyOrder = false
  cancel :any = "Cancel"
  backpage(){
    // this.ls.updatestatus()
    this.cancel = "Cancel"
    this.ls.show_home_popup = false
    this.router.navigate(['']);
  }

  goToHomePage(){
    this.location.back();
  }

  toToProfilePage(){
    this.router.navigate(['user-profile']);
  }



}
