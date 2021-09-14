import { Component, OnInit } from '@angular/core';

import { ChatService } from "./shared/chatService";
import { environment } from "src/environments/environment";
import { UserData } from "./shared/chatInterface";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  userMessageData: UserData[];

  constructor(
    private chatHttpService: ChatService
  ) { }

  ngOnInit(): void {
    this.getUserMessage(0,10)
  }

  getUserMessage(start: number, end: number) {
    this.chatHttpService.getMessages(`${environment.CHAT_GET_MESSAGES}/${start}/${end}`)
      .subscribe((el:any) => {
        this.userMessageData = el
        console.log(el)
      })
  }

  showMessageDialog(value: number) {
    console.log(value)
  }

}
