import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ChatComponent } from "./chat.component";



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
  ],
  exports: [
  ],
  providers: [],
})

export class ChatModule { }
