import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { AuthService } from "src/app/core/pages/auth/shared/auth.service";
import { environment } from "src/environments/environment";
import { AuthenticationValue } from "../shared/auth.interface";
import { userInfo } from "src/app/reducers/actions";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnInit, OnDestroy {

  mockUserData = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    exitDate: 1629986128140,
    photo: 'assets/images/sideBar/34.png'
  }

  public readonly authenticationForm: FormGroup = new FormGroup({
    secretKey: new FormControl('', [Validators.minLength(6)]),
  });

  userData: AuthenticationValue;
  destroySubscribe = new Subject();

  constructor(
    private authService: AuthService,
    private _routes: ActivatedRoute,
    private router: Router,
    private store: Store
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
        localStorage.setItem('token', res.token);
        this.store.dispatch(userInfo({ userInfo: this.mockUserData }));
        this.router.navigate(['/main/chat']);
      }, error => { console.error(error.error.message) })
  }

  ngOnDestroy(): void {
    this.destroySubscribe.next();
    this.destroySubscribe.complete();
  }
}
