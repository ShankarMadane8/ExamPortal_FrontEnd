import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private login:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.login.isLoggedIn() && this.login.getUserRole()=="ADMIN"){
        console.log("redirect admin ");
        return true;
      }
      console.log(this.login.isLoggedIn());
      console.log(this.login.getUserRole());
      console.log(" gurad admin(not allow NORMAL): rdirect login");
      this.router.navigate(["login"]);


    return false;
  }
  
}
