import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Selectors } from "../../reducers/selector";

import { UserInfo } from "./shared/side-bar.Interface";
import { SideBarConfigList } from "./shared/side-bar.ConfigList";
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss'],
  animations: [
    trigger('showMenu', [
      transition('false => true', [
        style({ width: '250px', transition: 'all 0.4s ease' }),
        animate('0.4s')
      ]),
      transition('true => false', [
        style({ width: '0', transition: 'all 0.4s ease' }),
        animate('0.4s')
      ])
    ]),
  ]
})

export class SideBarMenuComponent implements OnInit {
  userInfo: UserInfo[] = [];
  configList = SideBarConfigList;

  isActive: boolean = true;


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
