import { Component } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss'],
})
export class EmojiComponent {

  constructor() {}

  addEmoji(emoji: any) {
    // this.messageInput.nativeElement.value += emoji.emoji.native
  }

}
