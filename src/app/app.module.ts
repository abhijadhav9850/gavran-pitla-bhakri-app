import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LogininphoneComponent } from './logininphone/logininphone.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { FoodQuantityComponent } from './food-quantity/food-quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    LogininphoneComponent,
    OtpVerificationComponent,
    LogindetailsComponent,
    FoodQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
