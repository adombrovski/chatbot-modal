import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatMessage } from '../types';

@Injectable()
export class ChatmodalService {
  private messages = new BehaviorSubject<ChatMessage[]>([]);

  getMessages = (): Observable<ChatMessage[]> => this.messages;

  addMessages = (message: ChatMessage): void => {
    this.messages.next([message, ...this.messages.getValue()]);
  }
}
