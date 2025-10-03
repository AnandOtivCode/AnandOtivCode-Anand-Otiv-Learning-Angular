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
}
