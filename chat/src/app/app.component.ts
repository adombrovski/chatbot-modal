import { Component } from '@angular/core';
import { displayModal } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayModal: displayModal = false;

  handleDisplayModal = (): void => { this.displayModal = !this.displayModal }
}

