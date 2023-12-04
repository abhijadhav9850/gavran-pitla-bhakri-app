import { Component } from '@angular/core';

@Component({
  selector: 'app-newbackend',
  templateUrl: './newbackend.component.html',
  styleUrls: ['./newbackend.component.css']
})
export class NewbackendComponent {
  sendMail: any;

  ngOnInit(){
    console.log(this.sendMail());
  }
}
