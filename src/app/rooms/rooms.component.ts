import { Component, Input } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hotel, Room } from '../models/hotels';
import { RoomByIdComponent } from "../CARDS-HOTEL/room-by-id/room-by-id.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, RoomByIdComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
constructor( private rout : ActivatedRoute , private  APPI : HotelsService ){


  this.rout.params.subscribe(data => this.getSingleHotel(data['id']))
}
@Input() hotels!:Room

singleHotel : any = []


getSingleHotel(id : number){
    this.APPI.getHotelById(id).subscribe((resp:any) => {
      this.singleHotel=resp
      console.log(resp)
    })
  }


}
