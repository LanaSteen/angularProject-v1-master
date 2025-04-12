import { Routes } from '@angular/router';

export const routes: Routes = [
      { 
            path:"", redirectTo: "Home",pathMatch:'full'
      },

      {
            path:"Home",
            loadComponent:()=>import('./home/home.component').then(m => m.HomeComponent),
            title:"Home"
      },

      {
            path:"Room",
            loadComponent:()=>import('./rooms/rooms.component').then(m => m.RoomsComponent)
      },
      {
            path:"Hotels",
            loadComponent:()=>import('./hotels/hotels.component').then(m => m.HotelsComponent)
      },
      {
            path:"Booked-rooms",
            loadComponent:()=>import('./booked-rooms/booked-rooms.component').then(m => m.BookedRoomsComponent)
      }
];
