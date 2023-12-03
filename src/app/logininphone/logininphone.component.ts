import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-logininphone',
  templateUrl: './logininphone.component.html',
  styleUrls: ['./logininphone.component.css']
})
export class LogininphoneComponent {
  phoneForm: FormGroup;
  constructor(public service : PopupHandingService , public fb: FormBuilder){
    this.phoneForm = this.fb.group({
      number: ['', [Validators.required , Validators.pattern(/^\d{10}$/)] ],
    });
  }
  submitForm() {
    Object.values(this.phoneForm.controls).forEach((control) => {
      control.markAsTouched();
    });

    if (this.phoneForm.valid) {
      console.log('Form submitted:', this.phoneForm.value);
    }
  }

}
