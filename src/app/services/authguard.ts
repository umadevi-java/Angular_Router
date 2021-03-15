import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanActivateChild } from 
'@angular/router';
import { AuthStore } from './auth.store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonpClientBackend } from '@angular/common/http';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

constructor(private auth: AuthStore, private router: Router) {}
   
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> {
        return  this.isAuthenticated();
    }


canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
Observable<boolean | UrlTree> {
    return this.isAuthenticated();
}

// this private method is weitten here so taht we can use in 2 above functions..code reusability
private isAuthenticated(){
    return this.auth.isLoggedIn$
    .pipe(map(
         isLogged => 
             isLogged ? true: this.router.parseUrl('login')
              )); 
   
}

}
