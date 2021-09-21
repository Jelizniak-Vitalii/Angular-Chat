import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject } from "rxjs";
import {UserData} from "./chat.interface";

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  userInfo = new BehaviorSubject<UserData>({} as any);
  public userInfo$ = this.userInfo.asObservable();

  constructor(
    private http: HttpClient
  ) {}

  getMessages(url: string) {
    return this.http.get(url);
  }

}
