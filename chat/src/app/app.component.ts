import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ChatMessage, message } from './types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: message = '';

  constructor(private socket: WebSocketService) {}

  ngOnInit(): void {
    this.socket.inputMessage().subscribe(
      (data: any) => setTimeout(() => {
        this.messages = [{name: 'bot', message: data.outputMessage}, ...this.messages]
      }, 500 )
    );
  }

  sendMessage(): void {
    if(this.newMessage !== '') {
      this.socket.outputMessage({message: this.newMessage});
      this.messages = [{name: 'you', message: this.newMessage}, ...this.messages];
      this.newMessage = '';
    }
  }
}

