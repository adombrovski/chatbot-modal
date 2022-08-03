import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatMessage, message } from '../types';
import { ChatmodalService } from './chatmodal.service';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-chatmodal',
  templateUrl: './chatmodal.component.html',
  styleUrls: ['./chatmodal.component.css'],
  providers: [
    ChatmodalService,
    WebSocketService
  ]
})
export class ChatmodalComponent implements OnInit, OnDestroy {
  messages: ChatMessage[] = [];
  webSocketSubscription: Subscription;
  chatmodalServiceSubscription: Subscription;

  constructor(
    private socket: WebSocketService,
    private chatmodalService: ChatmodalService
  ) { }

  ngOnInit(): void {
    this.webSocketSubscription = this.socket.inputMessage().subscribe(
      data => setTimeout(() => {
        this.chatmodalService.addMessages({ name: 'bot', message: data.outputMessage })
      }, 500)
    );
    this.chatmodalServiceSubscription = this.chatmodalService.getMessages().subscribe(data => this.messages = data);
  }

  ngOnDestroy(): void {
    this.webSocketSubscription?.unsubscribe();
    this.chatmodalServiceSubscription?.unsubscribe();
  }

  sendMessage = (newMessage: message): void => {
    this.socket.outputMessage({ message: newMessage });
    this.chatmodalService.addMessages({ name: 'you', message: newMessage });
  }
}
