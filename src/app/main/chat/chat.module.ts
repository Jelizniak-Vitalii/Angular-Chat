import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import { PipeModule } from "src/app/shared/pipe/pipe.module"

import { ChatComponent } from "./chat.component";
import { ChatGuard } from "./shared/chat.guard";



const routes: Routes = [
  { path: '', component: ChatComponent, children: [
      { path: 'dialogs', loadChildren: () => import('./components/dialogs/dialogs.module').then(m => m.DialogsModule), canActivate: [ChatGuard] },
    ]}
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
    PipeModule
  ],
  exports: [
  ],
  providers: [],
})

export class ChatModule { }
