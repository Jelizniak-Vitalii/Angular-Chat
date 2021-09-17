import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import { PipeModule } from "src/app/shared/pipe/pipe.module"

import { DialogsComponent } from "./dialogs.component";
import { UserMessagesComponent } from "../../../../shared/customComponents/user-messages/user-messages.component";


const routes: Routes = [
  { path: '', component: DialogsComponent }
]

@NgModule({
  declarations: [
    DialogsComponent,
    UserMessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    PipeModule,

  ],
  exports: [
  ],
  providers: [],
})

export class DialogsModule { }
