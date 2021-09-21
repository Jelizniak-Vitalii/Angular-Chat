import { NgModule } from "@angular/core";
import { ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";

import { ChatComponent } from "./chat.component";
import { ChatGuard } from "./shared/chat.guard";
import { DialogsResolver } from "./components/dialogs/shared/dialogs.Resolver";

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'dialogs', loadChildren: () => import('./components/dialogs/dialogs.module').then(m => m.DialogsModule),
    canActivate: [ChatGuard], resolve: { userMessage: DialogsResolver }
  }
]

@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
  ],
  providers: [],
})

export class ChatModule { }
