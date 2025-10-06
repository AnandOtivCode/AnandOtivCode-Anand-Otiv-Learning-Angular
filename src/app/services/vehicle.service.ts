import { Injectable } from '@angular/core';

//import our mock data
import {vehicleList} from '../data/mock-content.data';
import {Observable, of} from "rxjs"
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehicles: Vehicle[] = vehicleList; //local copy of vehicle data for CRUD operations
  constructor(){}

  //Returns all vehicles
  getVehicles(): Observable <Vehicle[]>{
    return of(vehicleList) // Return an observable that emit mock vehicle data
  }



//Adding basic CRUD methods
  //Create: Add Vehicle
  addVehicle(newVehicle:Vehicle) : Observable<Vehicle[]>{
    this.vehicles.push(newVehicle)
    return of(this.vehicles);
  }

  //Update an Existing vehicle
  updateVehicle(updatedVehicle: Vehicle): Observable<Vehicle[]> {
    const index = this.vehicles.findIndex(vehicle => vehicle.id === updatedVehicle.id);
    if (index !== -1) {
      this.vehicles[index] = updatedVehicle;
    }
    return of(this.vehicles);
  }
  //Delete: Remove a vehicle by ID
  deleteStudent(vehicleId: number): Observable<Vehicle[]> {
    this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== vehicleId);
    return of(this.vehicles);
  }
  getVehicleById(vehicleId: number): Observable<Vehicle | undefined> {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === vehicleId);
    return of(vehicle);
  }
}
