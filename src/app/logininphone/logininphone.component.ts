import { Component } from '@angular/core';
import { PopupHandingService } from 'src/popup-handing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-logininphone',
  templateUrl: './logininphone.component.html',
  styleUrls: ['./logininphone.component.css']
})
export class LogininphoneComponent {

  submited = false
  emailsend:any=this.service.email
  phoneForm: FormGroup;
  constructor(public service : PopupHandingService , public fb: FormBuilder, public http:HttpClient){
    this.phoneForm = this.fb.group({
      number: ['', [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)] ],
    });

    this.http.post("http://localhost:4000/User/EmailID",this.phoneForm.value).subscribe(e => {
      console.log(e);
    })
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
