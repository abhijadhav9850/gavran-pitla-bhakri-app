import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginindetailsValueService } from 'src/loginindetails-value.service';
import { take } from 'rxjs/operators'; // Import 'take' operator if needed

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private ls: LoginindetailsValueService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isLoggedIn = false;

    this.ls.authLoggedIn.pipe(take(1)).subscribe((loggedIn: boolean) => {
      isLoggedIn = loggedIn;
    });

    return isLoggedIn;
  }
}
