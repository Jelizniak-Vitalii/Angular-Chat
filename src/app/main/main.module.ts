import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

import { SideBarMenuComponent } from "./side-bar-menu/side-bar-menu.component";
import { MainComponent } from "./main.component";



const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
    ]}
]

@NgModule({
  declarations: [
    MainComponent,
    SideBarMenuComponent,
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

export class MainModule { }
