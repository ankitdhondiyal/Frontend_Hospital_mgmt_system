import { Injectable } from '@angular/core';
import { AdminauthService } from './adminauth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminauthguardService implements CanActivate {
  constructor(
    private adminAuthService: AdminauthService,
    private router: Router
  ) {}

  canActivate() {
    if (this.adminAuthService.isUserloggedIn()) {
      return true;
    } else {
      this.router.navigate(['adlogin']);
      return false;
    }
  }
}
