// import { Component, Input } from '@angular/core';
// import { Hotel } from '../models/hotels';
// import { CommonModule } from '@angular/common';
// import { HotelsService } from '../services/hotels.service';
// import { BookedRoomsComponent } from "../booked-rooms/booked-rooms.component";

// @Component({
//   selector: 'app-home',
//   imports: [CommonModule, BookedRoomsComponent],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

//   @Input() Hotels! : Hotel

//   constructor( private httpHotel : HotelsService ){ }

//   hotelsArr : Hotel[] = []
//   ngOnInit(){

//     this.httpHotel.getAllHotels().subscribe((resp : any ) =>{
//       this.renderHotel(resp)
//     })
//   }
//   renderHotel(arr : Hotel[]){
//     this.hotelsArr=arr
//   }


// }


import { Component } from '@angular/core';
import { Hotel } from '../models/hotels';
import { CommonModule } from '@angular/common';
import { HotelsService } from '../services/hotels.service';
import { BookedRoomsComponent } from "../booked-rooms/booked-rooms.component";
import { HotelCardComponent } from '../hotels/hotel-card/hotel-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookedRoomsComponent, HotelCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
