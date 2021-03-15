import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthStore } from "./auth.store";

@Injectable()
export class CanLoadModule implements CanLoad {

    constructor(private auth: AuthStore, private router : Router){}

    canLoad(route: Route, segments: UrlSegment[]):
     Observable<boolean | UrlTree> {
        return this.auth.isLoggedIn$
        .pipe(
          tap(isLogged => isLogged ? true: this.router.navigateByUrl('/login'))
        );

    }

}