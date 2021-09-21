import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { SideBarMenuComponent } from "./pages/side-bar-menu/side-bar-menu.component";
import { CoreComponent } from "./core.component";

const routes: Routes = [
  { path: '', component: CoreComponent, children: [
    { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule) },
    ]}
]

@NgModule({
  declarations: [
    CoreComponent,
    SideBarMenuComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
  ],
  providers: [],
})

export class CoreModule { }
