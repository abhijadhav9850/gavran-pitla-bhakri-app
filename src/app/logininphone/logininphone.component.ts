import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';

@Component({
  selector: 'app-logininphone',
  templateUrl: './logininphone.component.html',
  styleUrls: ['./logininphone.component.css']
})
export class LogininphoneComponent {

  constructor(public service : PopupHandingService){

  }

}
