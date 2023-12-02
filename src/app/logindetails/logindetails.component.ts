import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { Subscriber } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent {
  myForm: FormGroup;
  
  
  constructor(public service : PopupHandingService , public fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }
  submitForm() {
    Object.values(this.myForm.controls).forEach((control) => {
      control.markAsTouched();
    });

    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    }
  }
}
