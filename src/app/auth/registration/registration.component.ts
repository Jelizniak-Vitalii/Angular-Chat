import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

import { AuthService } from "src/app/service/authService";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public form: FormGroup = new FormGroup({
    firstName: new FormControl('',[ Validators.required ]),
    lastName: new FormControl('',[ Validators.required ]),
    email: new FormControl('',[ Validators.required, Validators.email ]),
    password: new FormControl('',[ Validators.required ]),
})

  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) { }

  submit(): void {
    this.authService.registration(environment.REGISTRATION, { email: this.form.value.email })
      .subscribe(res => {
        this.cookie.set('token', res.token);
        this.router.navigate(['/authentication']);
        this.form.reset();
      }, error => {
        console.log(error)
      })
  }

}
