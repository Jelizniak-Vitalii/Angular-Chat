import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { ChatService } from "../../shared/chat.service";
import { ActivatedRoute } from "@angular/router";
import { DialogsInterface } from "./shared/dialogs.interface";

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})

export class DialogsComponent implements OnInit {

  messageData: DialogsInterface;
  userInfo: Observable<any>;

  constructor(
    private chatService: ChatService,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.messageData = this._routes.snapshot.data['userMessage']
    this.userInfo = this.chatService.userInfo$
    console.log(this._routes.snapshot.data['userMessage'])
  }

}
