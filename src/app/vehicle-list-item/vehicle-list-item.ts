import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../models/vehicle';
import {NgIf} from '@angular/common';
import {VehicleService} from '../services/vehicle.service';
@Component({
  selector: 'app-vehicle-list-item',
  imports: [NgIf],
  templateUrl: './vehicle-list-item.html',
  standalone: true,
  styleUrl: './vehicle-list-item.css'
})
export class VehicleListItem  {

  @Input() vehicle?: Vehicle;


  toggleSoldStatus(vehicle: Vehicle): void {
    vehicle.isSold = !vehicle.isSold;
  }










}


