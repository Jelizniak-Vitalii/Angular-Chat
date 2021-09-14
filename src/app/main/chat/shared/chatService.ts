import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { UserData } from "./chatInterface";




@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(
    private http: HttpClient
  ) {}

  getMessages(url: string) {
    return this.http.get(url);
  }

}
