import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean
  {
    if (this.loginService.isAuthenticated()) {
      console.log("User is trying to access: ", this.router.url);

      return true
    } else {
      this.router.navigate(["login"])
      return false
    }
  }


}
