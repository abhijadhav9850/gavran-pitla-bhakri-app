import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {
  private apiUrl = 'http://localhost:4000/Mobile_No/Send_OTP"'; // Replace with your backend API URL

  constructor(private http:HttpClient, public router:Router,) {}

  requestOtp(phoneNumber: string) {
    return this.http.post(`${this.apiUrl}/request-otp`, { phoneNumber });
  }

  verifyOtp(otp: string) {
    return this.http.post(`${this.apiUrl}/verify-otp`, { otp });
  }


  logout(): void {
    // Perform any additional cleanup or backend operations if needed
    // For simplicity, just navigate to the login page
    this.router.navigate(['/user-logout']);
  }

}
