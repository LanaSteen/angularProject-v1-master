import { Component } from '@angular/core';
import { Room } from '../../models/rooms';

@Component({
  selector: 'app-rooms-card',
  imports: [],
  templateUrl: './rooms-card.component.html',
  styleUrl: './rooms-card.component.scss'
})
export class RoomsCardComponent {
  Room: Room[] = []

  
}
