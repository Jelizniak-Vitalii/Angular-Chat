import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { PipeModule } from "./pipe/pipe.module";
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NgxDropzoneModule } from "ngx-dropzone";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";

import { EmojiComponent } from "./components/emoji/emoji.component";
import { FormsModule } from "@angular/forms";
import { UserMessagesComponent } from "./components/user-messages/user-messages.component";
import { UploadFileComponent } from "./components/upload-file/upload-file.component";
import { ModalDialogsComponent } from "./components/modal-dialogs/modal-dialogs.component";



@NgModule({
  declarations: [
    EmojiComponent,
    UserMessagesComponent,
    UploadFileComponent,
    ModalDialogsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    PipeModule,
    PickerModule,
    NgxDropzoneModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    PipeModule,
    PickerModule,
    NgxDropzoneModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,

    UserMessagesComponent,
    UploadFileComponent,
    ModalDialogsComponent,
    EmojiComponent,
  ]
})
export class SharedModule {}
