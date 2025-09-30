import { Component } from '@angular/core';
import {Vehicle} from '../models/vehicle';
import {NgForOf, NgIf} from '@angular/common';
import {VehicleListItem} from '../vehicle-list-item/vehicle-list-item';

@Component({
  selector: 'app-vehicle-list',
  imports: [NgForOf,VehicleListItem, NgIf],
  templateUrl: './vehicle-list.html',
  standalone: true,
  styleUrl: './vehicle-list.css'
})
export class VehicleList {

  // protected readonly title = signal('AnandOtiv-Learning-Angular');

  //All Vehicle Objects
  vehicle1 : Vehicle = {id: 1, type:"Car", model:"Nissan Sentra", year:2019 , km:15000, isSold:false};
  vehicle2: Vehicle = {id: 2, type:"Car", model:"Toyota Corolla", year:2020, km:22000, isSold:true};
  vehicle3: Vehicle = {id: 3, type:"Car", model:"Honda Civic", year:2018, km:30000, isSold:false};
  vehicle4: Vehicle = {id: 4, type:"SUV", model:"Ford Escape", year:2021, km:12000, isSold:false};
  vehicle5: Vehicle = {id: 5, type:"Truck", model:"Ram 1500", year:2017, km:45000, isSold:true};
  vehicle6: Vehicle = {id: 6, type:"Jeep", model:"Compass", year:2023, km:1500, isSold:false};


  //Can declare values either way
  vehicleList: Vehicle[] = //any[] would have worked as well
    [this.vehicle1,this.vehicle2, this.vehicle3,this.vehicle4,this.vehicle5,this.vehicle6]


  //Function that gets called from our onclick. Takes in an
  //argument of a variable called vehicle, which is type User and returns void
  toggleSoldStatus(vehicle: Vehicle): void {
    vehicle.isSold = !vehicle.isSold;
  }

}
