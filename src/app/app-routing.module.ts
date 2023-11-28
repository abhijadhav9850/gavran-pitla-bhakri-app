import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogininphoneComponent } from './logininphone/logininphone.component';
import { DetailsComponent } from './details/details.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'details',component:DetailsComponent},
  {path:'login',component:LogininphoneComponent},
  {path:'otp',component:OtpVerificationComponent},
  {path:'login-details',component:LogindetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
