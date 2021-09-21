import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

import { DialogsComponent } from "./dialogs.component";

const routes: Routes = [
  { path: '', component: DialogsComponent }
]

@NgModule({
  declarations: [
    DialogsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
})

export class DialogsModule {}
