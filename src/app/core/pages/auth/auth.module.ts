import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";

import { RegistrationComponent } from "./registration/registration.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoginComponent } from "./login/login.component";
import { AuthenticationInputComponent } from "src/app/core/pages/auth/components/authentication-input/authentication-input.component";
import { AuthResolver } from "./shared/auth.resolver";
import { FormInputComponent } from "./components/form-input/form-input.component";

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
  AuthenticationInputComponent,
  FormInputComponent
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    SharedModule,
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
