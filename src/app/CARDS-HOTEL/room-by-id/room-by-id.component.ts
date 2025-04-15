import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-by-id',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './room-by-id.component.html',
  styleUrl: './room-by-id.component.scss'
})
export class RoomByIdComponent {

}
