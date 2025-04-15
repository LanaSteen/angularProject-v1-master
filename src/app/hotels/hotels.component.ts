import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { HotelCardComponent } from "../CARDS-HOTEL/hotel-card/hotel-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hotel } from '../models/hotels';
import { HotelInCardComponent } from '../CARDS-HOTEL/hotel-in-card/hotel-in-card.component';
import { IframeComponent } from "../iframe/iframe.component";
import { RouterModule } from '@angular/router';
import { RoomByIdComponent } from "../CARDS-HOTEL/room-by-id/room-by-id.component";


@Component({
  selector: 'app-hotels',
  standalone: true,
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
  imports: [CommonModule, FormsModule, HotelInCardComponent, IframeComponent, CommonModule, RouterModule]
})
export class HotelsComponent {


  hotelsArr: Hotel[] = [];

  constructor(private httpHotel: HotelsService) { }

  ngOnInit() {
    this.httpHotel.getAllHotels().subscribe((resp:any) => {
      this.renderHotel(resp);
    });
  }

  renderHotel(arr: Hotel[]) {
    this.hotelsArr = arr;
  }

}
