import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {mergeMap, switchMap, take, withLatestFrom} from "rxjs/operators";
import {ChatService} from "../../shared/chat.Service";
import {environment} from "../../../../../environments/environment";


@Injectable({ providedIn: 'root' })

export class DialogsResolver implements Resolve<string> {

  constructor(
    private chatService: ChatService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.chatService.userInfo$
      .pipe(
        take(1),
        mergeMap(el => this.chatService.getMessages(`${environment.CHAT_GET_MESSAGE}/${el}/0/10`))
      )
  }
}
