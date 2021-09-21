import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ChatService } from "./shared/chat.service";
import { environment } from "src/environments/environment";
import { UserData } from "./shared/chat.interface";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  userMessageData: UserData[];


  constructor(
    private chatService: ChatService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getUserMessage(0,10)
  }

  getUserMessage(start: number, end: number) {
    this.chatService.getMessages(`${environment.CHAT_GET_MESSAGES_LIST}/${start}/${end}`)
      .subscribe((el:any) => {
        this.userMessageData = el
      })
  }

  showMessageDialog(value: number) {
    this.chatService.userInfo.next(this.userMessageData[value])
    this.router.navigate(['/main/chat/dialogs']);
  }

}
