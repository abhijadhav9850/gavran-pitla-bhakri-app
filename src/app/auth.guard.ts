// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginLogoutService } from './login-logout.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private logoutService: LoginLogoutService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check your authentication logic here
    // For simplicity, assume the user is authenticated
    const isAuthenticated = true;

    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      this.logoutService.logout();
      return false;
    }

    // If authenticated, allow access
    return true;
  }
}
