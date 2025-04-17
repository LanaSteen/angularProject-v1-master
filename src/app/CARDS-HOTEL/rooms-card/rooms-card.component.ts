import { Component, Input } from '@angular/core';
import { Room } from '../../models/rooms';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-rooms-card',
  imports: [RouterModule,RouterLink],
  templateUrl: './rooms-card.component.html',
  styleUrl: './rooms-card.component.scss'
})
export class RoomsCardComponent {

@Input() Room!: Room;
 activeClass = "active"
}
