import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

import { inputConfigList } from "../authInput.config";
import { AuthService } from "src/app/service/authService";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public inputConfigList = inputConfigList;
  public form: FormGroup = new FormGroup({
    email: new FormControl('',[ Validators.required, Validators.email ]),
    password: new FormControl('',[ Validators.required ]),
  })

  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) { }

  submit(): void {
    this.authService.logIn(environment.LOGIN, this.form.value)
      .subscribe(res => {
        this.cookie.set('token', res.token);
        this.router.navigate(['/auth/authentication']);
        this.form.reset();
      }, error => { console.error(error.error.message) })
  }

}
