import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SideBarMenuComponent } from "./components/side-bar-menu/side-bar-menu.component";

const routes: Routes = [
  { path: '', component: SideBarMenuComponent },
]

@NgModule({
  declarations: [
    SideBarMenuComponent
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
