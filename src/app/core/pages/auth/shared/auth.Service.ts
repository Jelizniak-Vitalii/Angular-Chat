import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

import { AuthenticationValue } from "./auth.interface";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  userDataState = new BehaviorSubject('');
  public userDataState$ = this.userDataState.asObservable();

  registration(url: string, value: { email: string }) {
    return this.http.post<{ token: string }>(url, value)
  }

  logIn(url: string, value: { email: string, password: string }) {
    return this.http.post<{ token: string }>(url,value);
  }

  authentication(url: string, value: AuthenticationValue) {
    return this.http.post<{ token: string }>(url, value)
  }

}
