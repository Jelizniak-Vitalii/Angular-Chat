import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { inputConfigList } from "../shared/auth.config";
import { AuthService } from "src/app/core/pages/auth/shared/auth.Service";
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
    private router: Router
  ) { }

  submit(): void {
    this.authService.logIn(environment.LOGIN, this.form.value)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/auth/authentication']);
        this.form.reset();
      }, error => { console.error(error.error.message) })
  }

}
