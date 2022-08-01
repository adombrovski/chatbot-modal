import { Component, OnInit } from '@angular/core';
import { ChatMessage, message } from '../types';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-chatmodal',
  templateUrl: './chatmodal.component.html',
  styleUrls: ['./chatmodal.component.css']
})
export class ChatmodalComponent implements OnInit {
  messages: ChatMessage[] = [];
  displayModal: boolean = false;

  constructor(private socket: WebSocketService) { }

  ngOnInit(): void {
    this.socket.inputMessage().subscribe(
      data => setTimeout(() => {
        this.messages = [{ name: 'bot', message: data.outputMessage }, ...this.messages];
      }, 500)
    );
  }

  sendMessage = (newMessage: message): void => {
    this.socket.outputMessage({ message: newMessage });
    this.messages = [{ name: 'you', message: newMessage }, ...this.messages];
  }

  handleDisplayModal = (): void => { this.displayModal = !this.displayModal }
}
