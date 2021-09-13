import { Component } from '@angular/core';

interface NavigationConfigListInterface {
  text: string,
  href: string,
  icon: string
}

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss']
})
export class SideBarMenuComponent {

  NavigationConfigList: NavigationConfigListInterface[] = [
    { text: 'HOME', href: 'main/home', icon: 'apps_icon' },
    { text: 'CHAT', href: '/main/chat', icon: 'sms_icon' },
    { text: 'CONTACT', href: 'contact', icon: 'person_icon' },
    { text: 'CALENDAR', href: 'calendar', icon: 'date_range_icon' },
    { text: 'SETTINGS', href: 'settings', icon: 'notifications_none_icon' },
  ];

}
