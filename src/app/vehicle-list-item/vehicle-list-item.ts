import {Component, Input} from '@angular/core';
import {Vehicle} from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list-item',
  imports: [],
  templateUrl: './vehicle-list-item.html',
  standalone: true,
  styleUrl: './vehicle-list-item.css'
})
export class VehicleListItem {

  @Input() vehicle?: Vehicle;

}
