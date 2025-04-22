import { Component } from '@angular/core';
import { RoomFilter } from '../models/room-filter';
import { HotelsService } from '../services/hotels.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-room-filter',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './room-filter.component.html',
  styleUrl: './room-filter.component.scss'
})
export class RoomFilterComponent {

  filterRoomArr: RoomFilter[] = []

  constructor(private httpFilterR: HotelsService) {  }

  ngOnInit(id : number){
    this.httpFilterR.getRoomTypes(id).subscribe((resp:any) => {
      console.log(resp)
      this.renderRoomTypes(resp)
    })
  }

  renderRoomTypes(arr : RoomFilter[]){
    this.filterRoomArr = arr
  }

}
