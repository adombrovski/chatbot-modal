import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { message } from '../types';

@Injectable()
export class WebSocketService {
  constructor(private socket: Socket) { }

  outputMessage = (data: { message: message }): void => this.socket.emit('message', data);

  inputMessage = () => (
    new Observable<any>(observer => {
      this.socket.on('reply', (data: any) => observer.next(data));
      return () => this.socket.disconnect;
    })
  );
}
