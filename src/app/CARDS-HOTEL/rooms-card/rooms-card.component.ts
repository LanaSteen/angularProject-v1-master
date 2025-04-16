import { Component, Input } from '@angular/core';
import { Room } from '../../models/rooms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-rooms-card',
  imports: [RouterModule],
  templateUrl: './rooms-card.component.html',
  styleUrl: './rooms-card.component.scss'
})
export class RoomsCardComponent {

@Input() Room!: Room;


}
