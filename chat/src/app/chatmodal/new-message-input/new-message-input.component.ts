import { Component, EventEmitter, Output } from '@angular/core';
import { message } from 'src/app/types';

@Component({
  selector: 'app-new-message-input',
  templateUrl: './new-message-input.component.html',
  styleUrls: ['./new-message-input.component.css']
})
export class NewMessageInputComponent {
  newMessage: message = '';

  @Output() sendMessage = new EventEmitter<message>();

  handleSendMessage = () => {
    if (this.newMessage != '') {
      this.sendMessage.emit(this.newMessage);
      this.newMessage = '';
    }
  }
}
