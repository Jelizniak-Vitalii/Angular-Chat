import {Component, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss'],
})
export class EmojiComponent {
  @Output() newEmoji = new EventEmitter<string>();

  constructor() {}

  addEmoji(emoji: string ) {
    this.newEmoji.emit(emoji)
  }

}
