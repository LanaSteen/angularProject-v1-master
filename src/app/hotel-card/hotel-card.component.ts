import { Component, Input } from '@angular/core';
import { Hotel } from '../models/hotels';

@Component({
  selector: 'app-hotel-card',
  standalone : true,
  imports: [],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss'
})
export class HotelCardComponent {
  @Input() Hotels!: Hotel;
}
