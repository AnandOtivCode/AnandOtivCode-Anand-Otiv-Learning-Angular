import { Component, signal, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet,RouterLinkActive} from '@angular/router';
import {Vehicle} from './models/vehicle';
import {JsonPipe, NgForOf} from "@angular/common";
import {VehicleList} from './vehicle-list/vehicle-list';
import {VehicleListItem} from './vehicle-list-item/vehicle-list-item';
import {vehicleList} from './data/mock-content.data';
import {VehicleService} from './services/vehicle.service';



@Component({
  selector: 'app-root',
    imports: [RouterOutlet, NgForOf, JsonPipe, VehicleList, VehicleListItem,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title="Vehicle Shop"
  vehicleList: Vehicle[] = [];
  topVehicle?:Vehicle|undefined;
  chosenVehicleId = 3;

  //For testing getVehiclebyId
  testVehicleRead?:Vehicle|undefined;




  constructor(public vehicleService: VehicleService) {
    //Constructor primarily used for dependency injection
  }

    //Sets the Vehicle at the top as this
    // this.topVehicle = vehicleList[this.chosenVehicleId]



  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.vehicleService.getVehicles().subscribe({
      next: (data: Vehicle[]) => this.vehicleList = data,
      error: err => console.error("Error Fetching Vehicles", err),
      complete: () => console.log("Vehicle data fetch complete!"),


    })

    //Selected Vehicle to show on top
    //  this.vehicleService.getSelectedVehicle().subscribe({
    //    next:(data:Vehicle)=>{this.topVehicle = data
    //      console.log("changes made in app-compnent to selected Vehicle")},
    //    error: err => console.error("Error Fetching top vehicle", err),
    //    complete: () => console.log("top vehicle data fetch complete!"),
    //
    //  })

    //Test Delete
    // this.vehicleService.deleteVehicle(5).subscribe({
    //   next:(data:Vehicle[])=>this.vehicleList = data,
    //   error: err => console.error("Error deleting vehicle", err),
    //   complete: () => console.log("vehicle deleted!"),
    //
    // })


//let vehicle6: Vehicle = {id: 6, type:"Jeep", model:"Compass", year:2023, km:1500, isSold:false, img:"images/jeepCompass.jpg"};
//     //Test Create
//     let testVehicle: Vehicle = {id: 14, type:"Jeep", model:"(Test)Compass", year:2023, km:1500, isSold:false, img:"images/jeepCompass.jpg"}
//     this.vehicleService.addVehicle(testVehicle).subscribe();
//
//
//     //Test Update
//     let testVehicle2:Vehicle = {id: 1, type:"Car", model:"Rebuilt-Nissan Sentra", year:2019 , km:15000, isSold:false, img:"images/nissan.jpg"};
//     this.vehicleService.updateVehicle(testVehicle2).subscribe();
//
//     //Test Read
//     this.vehicleService.getVehicleById(3).subscribe({
//       next: (data:Vehicle | undefined) => this.testVehicleRead = data,
//       error: err => console.error("Error getting VehicleById", err),
//       complete: () => console.log("vehicle gotten by Id!"),
//     })

    /*
    this.vehicleService.getVehicles().subscribe({
      next: (data: Vehicle[]) => this.vehicleList = data,
      error: err => console.error("Error Fetching Vehicles", err),
      complete: () => console.log("Vehicle data fetch complete!"),


    })
     */
    /*
     getVehicleById(vehicleId: number): Observable<Vehicle | undefined> {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === vehicleId);
    return of(vehicle);
  }
     */
  }

    /*
      addVehicle(newVehicle:Vehicle) : Observable<Vehicle[]>{
    this.vehicles.push(newVehicle)
    return of(this.vehicles);
  }
     */
//let vehicle1 :Vehicle = {id: 1, type:"Car", model:"Nissan Sentra", year:2019 , km:15000, isSold:false, img:"images/nissan.jpg"};
  }













 // // protected readonly title = signal('AnandOtiv-Learning-Angular');
 //
 //  //All Vehicle Objects
 //  vehicle1 : Vehicle = {id: 1, type:"Car", model:"Nissan Sentra", year:2019 , km:15000, isSold:false};
 //  vehicle2: Vehicle = {id: 2, type:"Car", model:"Toyota Corolla", year:2020, km:22000, isSold:true};
 //  vehicle3: Vehicle = {id: 3, type:"Car", model:"Honda Civic", year:2018, km:30000, isSold:false};
 //  vehicle4: Vehicle = {id: 4, type:"SUV", model:"Ford Escape", year:2021, km:12000, isSold:false};
 //  vehicle5: Vehicle = {id: 5, type:"Truck", model:"Ram 1500", year:2017, km:45000, isSold:true};
 //  vehicle6: Vehicle = {id: 6, type:"Jeep", model:"Compass", year:2023, km:1500, isSold:false};
 //
 //
 //  //Can declare values either way
 //  vehicleList: Vehicle[] = //any[] would have worked as well
 //    [this.vehicle1,this.vehicle2, this.vehicle3,this.vehicle4,this.vehicle5,this.vehicle6]
 //
 //
 //  //Function that gets called from our onclick. Takes in an
 //  //argument of a variable called vehicle, which is type User and returns void
 //  toggleSoldStatus(vehicle: Vehicle): void {
 //    vehicle.isSold = !vehicle.isSold;
 //  }

  //protected readonly vehicleList = vehicleList;


