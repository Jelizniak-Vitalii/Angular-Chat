import {Component, HostListener, OnInit} from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Selectors } from "../../../reducers/selector";

import { UserInfo } from "./shared/side-bar.Interface";
import { SideBarConfigList } from "./shared/side-bar.ConfigList";

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss'],
})

export class SideBarMenuComponent implements OnInit {
  isActive: boolean = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth < 990) {
      this.isActive = true;
    }
  }
  userInfo: UserInfo[] = [];
  configList = SideBarConfigList;

  mockUserData = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    exitDate: 1629986128140,
    photo: 'assets/images/sideBar/34.png'
  }

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.userInfo.push(this.mockUserData)
    this.store.pipe(select(Selectors.userInfo))
      .subscribe((res: UserInfo) => {
        // this.userInfo.push(res)
      })
  }

}
