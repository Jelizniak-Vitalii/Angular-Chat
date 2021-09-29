import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ChatService } from "./chat.service";

@Injectable({
  providedIn: 'root'
})

export class ChatGuard implements CanActivate {
  constructor(
    private router: Router,
    private chatService: ChatService,
  ){}

  canEntry: boolean;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.chatService.userInfo$.subscribe((obj:any) => {
      this.canEntry = obj;
    });
    if (!!Object.keys(this.canEntry).length) {
      return true
    } else {
      this.router.navigate(['main/chat']);
      return false
    }
  }
}
