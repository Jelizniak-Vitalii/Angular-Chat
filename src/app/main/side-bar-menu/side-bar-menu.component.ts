import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { userInfo } from "../../reducers/selector";

import { UserInfo } from "./sideBarInterface";
import { SideBarConfigList } from "./sideBarConfigList";

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss']
})

export class SideBarMenuComponent implements OnInit {
  userInfo: UserInfo[] = [];
  configList = SideBarConfigList;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    // this.store.pipe(select(userInfo))
    //   .subscribe((res: UserInfo) => {
    //     this.userInfo.push(res)
    //   })
  }

}
