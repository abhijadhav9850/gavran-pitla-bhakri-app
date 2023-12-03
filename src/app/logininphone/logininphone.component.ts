import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-logininphone',
  templateUrl: './logininphone.component.html',
  styleUrls: ['./logininphone.component.css']
})
export class LogininphoneComponent {

  submited = false

  phoneForm: FormGroup;
  constructor(public service : PopupHandingService , public fb: FormBuilder){
    this.phoneForm = this.fb.group({
      number: ['', [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)] ],
    });
  }
  submitForm() {
    Object.values(this.phoneForm.controls).forEach((control) => {
      control.markAsTouched();
    });
    this.submited = true
    if (this.phoneForm.valid) {
      const formData = { email: this.phoneForm.value.email };    }
  }


}
