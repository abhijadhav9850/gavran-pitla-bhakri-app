import { Component, } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  hide : any = false

  divStyle = {
    // display :'none',
    backgroundColor: 'lightblue',
    color: 'black',
    'margin-top': '45%',
    'transition' : 'margin-top 1s',
  };

  changeStyle() {
    this.hide =!this.hide
    // Change the style dynamically

    this.divStyle = {
      // display: 'flex',
      backgroundColor: 'lightgreen',
      color: 'white',
      'margin-top': '20%',
      'transition': 'all 1s',
    };
  }
}