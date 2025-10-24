import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../models/vehicle';
import {JsonPipe, NgForOf, NgIf} from '@angular/common';
import {VehicleListItem} from '../vehicle-list-item/vehicle-list-item';
import {VehicleService} from "../services/vehicle.service"
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

// imports: [RouterOutlet, NgForOf, JsonPipe, VehicleList, VehicleListItem,RouterLink,RouterLinkActive],

@Component({
  selector: 'app-vehicle-list',
  imports: [NgForOf, VehicleListItem,JsonPipe, NgIf, RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './vehicle-list.html',
  standalone: true,
  styleUrl: './vehicle-list.css'
})
export class VehicleList implements OnInit{

  vehicleList: Vehicle[] = [];
  // selectedVehicle: Vehicle | undefined;

constructor(private vehicleService: VehicleService){
  //Constructor primarily used for dependency injection
}
  ngOnInit() {
  // this.getSelectedVehicle.emit(this.selectedVehicle)
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

  selectVehicle(vehicle:Vehicle):void{
  this.vehicleService.setSelectedVehicle(vehicle);
  // console.log(this.vehicleService.getSelectedVehicle().id)
  console.log(vehicle.id);
    console.log("vehicle-list selectVehicle works");
  }

  deleteVehicle(vehicleId:number):void{
  this.vehicleService.deleteVehicle(vehicleId);
  console.log("deleted vehicle with ID: "+vehicleId+" in vehicle-list.ts")

  }



}
