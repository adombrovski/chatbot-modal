import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from 'src/app/types';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  @Input() messages: Observable<ChatMessage[]>;
}
