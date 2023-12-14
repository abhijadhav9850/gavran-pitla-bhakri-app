import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogininphoneComponent } from './logininphone/logininphone.component';
import { DetailsComponent } from './details/details.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { FoodQuantityComponent } from './food-quantity/food-quantity.component';
import { DefaultLoginComponent } from './default-login/default-login.component';
import { DefaultOtpVerificationComponent } from './default-otp-verification/default-otp-verification.component';
import { DefultUserLoginComponent } from './defult-user-login/defult-user-login.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'details',component:DetailsComponent},
  {path:'login',component:LogininphoneComponent},
  {path:'otp',component:OtpVerificationComponent},
  {path:'login-details',component:LogindetailsComponent},
  {path:'food', component:FoodQuantityComponent},
  {path:'defult-login', component:DefaultLoginComponent},
  {path:'defult-otp', component:DefaultOtpVerificationComponent},
  {path:'defult-user-login', component:DefultUserLoginComponent},
  {path:'setting', component:SettingsComponent},
  {path:'payment', component:PaymentpageComponent},
  {path:'user-profile', component:UserProfileComponent},
  {path:'user-order', component:UserOrdersComponent},
  {path:'user-payment', component:UserPaymentComponent},
  {path:'delivery-add',component:DeliveryAddressComponent},
  {path:'order-his',component:OrderHistoryComponent, canActivate: [AuthGuard]},
  {path:'user-setting',component:UserSettingComponent},
  {path:'order-info',component:OrderInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
