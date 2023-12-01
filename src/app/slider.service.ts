import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }

  isPopupVisible = false;

  togglePopup(): void {
    console.log(this.isPopupVisible = !this.isPopupVisible);
    this.isPopupVisible = !this.isPopupVisible
  }
}
