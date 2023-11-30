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
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SettingsComponent } from './settings/settings.component';
import { DefaultLoginComponent } from './default-login/default-login.component';
import { DefaultOtpVerificationComponent } from './default-otp-verification/default-otp-verification.component';
import { DefultUserLoginComponent } from './defult-user-login/defult-user-login.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    LogininphoneComponent,
    OtpVerificationComponent,
    LogindetailsComponent,
    FoodQuantityComponent,
    OrderHistoryComponent,
    SettingsComponent,
    DefaultLoginComponent,
    DefaultOtpVerificationComponent,
    DefultUserLoginComponent,
    PaymentpageComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
