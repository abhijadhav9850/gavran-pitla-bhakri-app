import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent {
  constructor(public router: Router){}

  gotoprofile(){
        // this.router.navigate(['user-profile'])
  }
}
