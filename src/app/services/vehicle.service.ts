import { Injectable } from '@angular/core';

//import our mock data
import {vehicleList} from '../data/mock-content.data';
import {catchError, Observable,  throwError} from 'rxjs';
import {of} from "rxjs"
import {Vehicle} from '../models/vehicle';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import{VehicleList} from '../vehicle-list/vehicle-list';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'api/vehicles'
  private vehicles: Vehicle[] = vehicleList; //local copy of vehicle data for CRUD operations

  constructor(private http:HttpClient){
    //CRUD operations using HTTP Requests
    //All operations we need are:
    // Get, post, put, delete
  }

  //Returns all vehicles
  // getVehicles(): Observable <Vehicle[]>{
  //   return of(this.vehicles) // Return an observable that emit mock vehicle data
  // }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

//Adding basic CRUD methods
  //Create: Add Vehicle

  // addVehicle(newVehicle:Vehicle) : Observable<Vehicle[]>{
  //   this.vehicles.push(newVehicle)
  //   return of(this.vehicles);
  // }
  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    vehicle.id = this.generateNewId();
    return this.http.post<Vehicle>(this.apiUrl, vehicle).pipe(catchError(this.handleError));
  }


  //Update an Existing vehicle
  // updateVehicle(updatedVehicle: Vehicle): Observable<Vehicle[]> {
  //   const index = this.vehicles.findIndex(vehicle => vehicle.id === updatedVehicle.id);
  //   if (index !== -1) {
  //     this.vehicles[index] = updatedVehicle;
  //   }
  //   return of(this.vehicles);
  // }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle | undefined> {
    const url = `${this.apiUrl}/${vehicle.id}`;
    return this.http.put<Vehicle>(url, vehicle).pipe(catchError(this.handleError));
  }


  //Delete: Remove a vehicle by ID
  // deleteVehicle(vehicleId: number): Observable<Vehicle[]> {
  //   this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== vehicleId);
  //   return of(this.vehicles);
  // }
  deleteVehicle(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  getVehicleById(vehicleId: number): Observable<Vehicle | undefined> {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === vehicleId);
    return of(vehicle);
  }

  generateNewId(): number{
    //Return 1 above last index or 1 if vehicle length is 0 (First Item has ID of 1)
    return this.vehicles.length>0 ?Math.max(...this.vehicles.map(vehicle=>vehicle.id))+1:1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
