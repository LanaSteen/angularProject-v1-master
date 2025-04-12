import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";

@Component({
  selector: 'app-hotels',
  imports: [ErrorDialogComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {
  constructor( private httpHotel : HotelsService ){ }

  ngOnInit(){

    this.httpHotel.getAllHotels().subscribe((resp : any ) =>{
      console.log(resp)
    })
  }

}
