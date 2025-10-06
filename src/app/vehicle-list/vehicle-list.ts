import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../models/vehicle';
import {NgForOf, NgIf} from '@angular/common';
import {VehicleListItem} from '../vehicle-list-item/vehicle-list-item';
import {VehicleService} from "../services/vehicle.service"

@Component({
  selector: 'app-vehicle-list',
  imports: [NgForOf,VehicleListItem, NgIf],
  templateUrl: './vehicle-list.html',
  standalone: true,
  styleUrl: './vehicle-list.css'
})
export class VehicleList implements OnInit{

  vehicleList: Vehicle[] = [];

constructor(private vehicleService: VehicleService){
  //Constructor primarily used for dependency injection
}
  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.vehicleService.getVehicles().subscribe({
      next: (data: Vehicle[]) => this.vehicleList = data,
      error: err => console.error("Error Fetching Vehicles", err),
      complete: () => console.log("Vehicle data fetch complete!")
    })
  }




  //Function that gets called from our onclick. Takes in an
  //argument of a variable called vehicle, which is type User and returns void
  toggleSoldStatus(vehicle: Vehicle): void {
    vehicle.isSold = !vehicle.isSold;
  }

}
