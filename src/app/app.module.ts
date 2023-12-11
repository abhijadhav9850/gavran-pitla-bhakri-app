import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { NewbackendComponent } from './newbackend/newbackend.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { OrderInfoComponent } from './order-info/order-info.component';
// import { CountdownModule } from 'ngx-countdown';



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
    UserProfileComponent,
    UserPaymentComponent,
    UserOrdersComponent,
    UserSettingComponent,
    OrderInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CountdownModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
