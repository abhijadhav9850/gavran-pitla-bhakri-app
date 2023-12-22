import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(public service : PopupHandingService, public ls : LoginindetailsValueService,public router: Router){ }


  changePath(){
    this.router.navigate(['/user-profile'])
  }

}
