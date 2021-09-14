import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ChatComponent } from "./chat.component";
import {MatIconModule} from "@angular/material/icon";



const routes: Routes = [
  { path: '', component: ChatComponent }
]

@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [
  ],
  providers: [],
})

export class ChatModule { }
