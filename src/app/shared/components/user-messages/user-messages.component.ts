import { Component, ElementRef, Input, NgIterable, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { UploadFileComponent } from "../upload-file/upload-file.component";
import { DialogsInterface } from "../../../core/pages/chat/components/dialogs/shared/dialogs.interface";

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.scss'],
})
export class UserMessagesComponent {
  @ViewChild('messageInput') messageInput: ElementRef;
  myWs = new WebSocket('ws://localhost:9000');

  public inputParams: NgIterable<DialogsInterface>;

  constructor(
    private dialog: MatDialog,
  ) { }

  @Input() set inputParameters(params: any) {
    this.inputParams = params;
  }

  openModalUploadFile() {
    this.dialog.open(UploadFileComponent, { data: this.messageInput.nativeElement.value })
  }


  sendMessage($event: any) {
    this.wsSendEcho($event.target.value)

    this.myWs.onopen = function () {
      console.log('подключился');
    };
    this.myWs.onmessage = function (message) {
      console.log('Message: %s', message.data);
    };
  }

  wsSendEcho(value: any) {
    this.myWs.send(JSON.stringify({action: 'ECHO', data: value.toString()}));
  }

  addEmoji(value: string) {
    this.messageInput.nativeElement.value += value
  }

}

