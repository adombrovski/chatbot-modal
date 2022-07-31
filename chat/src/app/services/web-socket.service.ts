import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { message } from '../types'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor(private socket: Socket) { }

  outputMessage = (data: {message: message}): void => this.socket.emit('message', data);

  inputMessage = () => this.socket.fromEvent('reply');
}
