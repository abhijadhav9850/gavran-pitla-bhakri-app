import { Component } from '@angular/core';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent {
  constructor(public ls: LoginindetailsValueService,public router:Router){ }
  backpage(){
    this.router.navigate(['']);

  }

}
