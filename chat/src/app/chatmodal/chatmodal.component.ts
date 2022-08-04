import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  messages: Observable<ChatMessage[]>;
  webSocketSubscription: Subscription;

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
    this.messages = this.chatmodalService.getMessages();
  }

  ngOnDestroy(): void {
    this.webSocketSubscription.unsubscribe();
  }

  sendMessage = (newMessage: message): void => {
    this.socket.outputMessage({ message: newMessage });
    this.chatmodalService.addMessages({ name: 'you', message: newMessage });
  }
}
