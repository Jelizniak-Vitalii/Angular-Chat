import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

import { AuthService } from "./authService";

@Injectable({ providedIn: 'root' })

export class AuthResolver implements Resolve<string> {

  constructor(
    private authService: AuthService,
) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.authService.userDataState$.pipe(take(1));
  }
}
