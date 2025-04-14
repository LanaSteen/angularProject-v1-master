import { Component } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
constructor( private rout : ActivatedRoute , private  api : HotelsService ){


  this.rout.params.subscribe(data => this.getSingleHotel(data['id']))
}

singleHotel : any


getSingleHotel(id : number){
    this.api.getHotelById(id).subscribe((resp:any) => {
      this.singleHotel=resp.data
    })
  }
}
