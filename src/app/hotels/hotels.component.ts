import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-hotels',
  standalone: true,
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
  imports: [ErrorDialogComponent]
})
export class HotelsComponent {
  constructor( private httpHotel : HotelsService ){ }

  ngOnInit(){

    this.httpHotel.getAllHotels().subscribe((resp : any ) =>{
      console.log(resp)
    })
  }

}
