import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private APPI : ApiService ) { }

  getAllHotels(){
    return this.APPI.getAll('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }

  getHotelById(id : number){
    return this.APPI.getById('https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel' , id)
  }

  getAllRooms(){
    return this.APPI.getAllRooms('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
  }

  getRoomById( id : number) {

    return this.APPI.getById('https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom',id)


  }


}
