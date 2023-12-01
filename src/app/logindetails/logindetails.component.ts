import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent {
  constructor(public service : PopupHandingService){}

}
