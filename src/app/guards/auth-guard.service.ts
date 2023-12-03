import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuard {
    constructor(private authService: AuthService, private route: Router){}
    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot):  
                Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean{
        
        return this.authService.isAuthenticated().then(
            (auth)=> {
                if(auth){
                  return true;  
                } else {
                    this.route.navigate(['/']);
                    return false;
                }
            }
        );
    }

    canActivateChild(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):  
        Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean{
        return this.canActivate(route, state);
    }
}