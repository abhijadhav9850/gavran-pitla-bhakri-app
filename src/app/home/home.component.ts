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
    // backgroundColor: 'lightblue',
    // color: 'black',
    'width' : '100%',
    'margin-top': '10%',
    'transition' : 'margin-top 1s',
    'box-shadow' : '0px 0px 20px lightgray',
    'z-index': '-1',
    'background-color' : '#fff',

  };

  changeStyle() {
    this.hide =!this.hide
    // Change the style dynamically

    this.divStyle = {
      // display: 'flex',
      // backgroundColor: 'lightgreen',
      // color: 'white',
      'width' : '100%',
      'margin-top': '-130%',
      'transition': 'all 1s',
      'box-shadow' : '0px 0px 20px lightgray',
      'z-index': '1',
      'background-color' : '#fff',
    };
  }





}