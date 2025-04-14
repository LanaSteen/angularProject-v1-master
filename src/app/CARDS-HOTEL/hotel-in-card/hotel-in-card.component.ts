import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotels';

@Component({
  selector: 'app-hotel-in-card',
  standalone : true,
  imports: [], 
  templateUrl: './hotel-in-card.component.html',
  styleUrl: './hotel-in-card.component.scss'
})
export class HotelInCardComponent {
  @Input() Hotels!: Hotel;
}
