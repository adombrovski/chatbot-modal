import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatmodalComponent } from './chatmodal/chatmodal.component';
import { MessageListComponent } from './chatmodal/message-list/message-list.component';
import { NewMessageInputComponent } from './chatmodal/new-message-input/new-message-input.component';

const config: SocketIoConfig = {
  url: environment.webSocketURL,
  options: { transports: ['websocket'] }
}

@NgModule({
  declarations: [
    AppComponent,
    ChatmodalComponent,
    MessageListComponent,
    NewMessageInputComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
