import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration/registration.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoginComponent } from "./login/login.component";
import { FormInputComponent } from "../../shared/customComponents/form-input/form-input.component";
import { AuthenticationInputComponent } from "../../shared/customComponents/authentication-input/authentication-input.component";
import { AuthResolver } from "./authResolve";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'authentication', component: AuthenticationComponent, resolve: { userData: AuthResolver } }
]

const components = [
  LoginComponent,
  RegistrationComponent,
  AuthenticationComponent,
  FormInputComponent,
  AuthenticationInputComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
   components
  ],
  providers: [],
})

export class AuthModule { }