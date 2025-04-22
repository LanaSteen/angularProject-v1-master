import { Component, Input } from '@angular/core';
import { RoomFilter } from '../models/room-filter';
import { HotelsService } from '../services/hotels.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Room } from '../models/rooms';


@Component({
  selector: 'app-room-filter',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './room-filter.component.html',
  styleUrl: './room-filter.component.scss'
})
export class RoomFilterComponent {

  filterRoomArr: Room[] = []

  constructor(private httpFilterR: HotelsService) {  }

  ngOnInit(){
    this.httpFilterR.getRoomTypes().subscribe((resp:any) => {
      console.log(resp)
      this.renderRoomTypes(resp)
    })
  }

  renderRoomTypes(arr : Room[]){
    this.filterRoomArr = arr
  }

  @Input() types!:Room 

}

