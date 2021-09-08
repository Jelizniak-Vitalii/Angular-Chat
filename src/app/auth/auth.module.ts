import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration/registration.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'authentication', component: AuthenticationComponent }
]

const components = [
  LoginComponent,
  RegistrationComponent,
  AuthenticationComponent,
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
   components
  ],
  providers: [],
})

export class AuthModule { }
