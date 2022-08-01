import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/types';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Input() messages: ChatMessage[];
  
  //Added since typescript complaining 
  constructor() { this.messages = [] }

  ngOnInit(): void {}
}
