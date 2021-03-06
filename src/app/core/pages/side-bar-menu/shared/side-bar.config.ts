import { SideBarInterface } from "./side-bar.interface";

export const SideBarConfig: SideBarInterface[] = [
  { text: 'HOME', href: 'main/home', icon: 'apps_icon' },
  { text: 'CHAT', href: '/main/chat', icon: 'sms_icon' },
  { text: 'CONTACT', href: 'contact', icon: 'person_icon' },
  { text: 'CALENDAR', href: 'calendar', icon: 'date_range_icon' },
  { text: 'SETTINGS', href: 'settings', icon: 'notifications_none_icon' },
  { text: 'LOG OUT', href: 'auth/login', icon: 'power_settings_new_icon'}
];
