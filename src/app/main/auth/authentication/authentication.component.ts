import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";


import { AuthService } from "src/app/service/authService";
import { environment } from "src/environments/environment";
import { AuthenticationValue } from "../auth.interface";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnInit, OnDestroy {
  public readonly authenticationForm: FormGroup = new FormGroup({
    secretKey: new FormControl('', [Validators.minLength(6)]),
  });

  userData: AuthenticationValue;

  destroySubscribe = new Subject();

  constructor(
    private authService: AuthService,
    private _routes: ActivatedRoute,
    private cookie: CookieService,

  ) { }

  ngOnInit() {
    this.userData = this._routes.snapshot.data['userData']
    this.authenticationForm.valueChanges
      .pipe(takeUntil(this.destroySubscribe))
      .subscribe((el: string) => {
      if(this.authenticationForm.value.secretKey.length > 5) {
        if(this.userData.status) {
          this.userData.secretKey = this.authenticationForm.value.secretKey
          this.submit(environment.REGISTRATION_AUTHENTICATION, this.userData)
        } else {
          this.submit(environment.LOGIN_AUTHENTICATION, this.authenticationForm.value)
        }

      }
    })
  }

  submit( url: string, value: AuthenticationValue ) {
    this.authService.authentication( url, value )
      .subscribe(res => {
        console.log(res)
        this.cookie.set('token', res.token);
      }, error => { console.error(error.error.message) })
  }

  ngOnDestroy(): void {
    this.destroySubscribe.next();
    this.destroySubscribe.complete();
  }
}
