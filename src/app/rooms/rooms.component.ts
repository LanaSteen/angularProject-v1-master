import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../services/hotels.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  singleHotel: any;
  
  constructor(
    private route: ActivatedRoute,
    private api: HotelsService
  ) {}

  ngOnInit(): void {
    // Check if route params contain the hotel id
    this.route.params.subscribe(params => {
      const hotelId = params['id'];
      if (hotelId) {
        console.log('Hotel ID:', hotelId); // Log ID for debugging

        // Call API with the hotel ID
        this.api.getHotelById(+hotelId).subscribe(
          (response: any) => {
            console.log('API Response:', response); // Log response
            this.singleHotel = response.data;
          },
          (error) => {
            console.error('API Error:', error); // Log error
          }
        );
      } else {
        console.error('No hotel ID found in route params.');
      }
    });
  }
}
