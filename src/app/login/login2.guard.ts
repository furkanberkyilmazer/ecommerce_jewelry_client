import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard2 implements CanActivate{
    constructor(private accountService:AccountService,
        private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       let logged=this.accountService.isLoggedIn();
      
       
       if(logged){
        if(this.accountService.users.roleId==1 || this.accountService.users.roleId==2) return true;
       
      }
       this.router.navigate(["login"]);
       return false;
    }

}