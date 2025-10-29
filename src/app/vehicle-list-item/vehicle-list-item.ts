import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../models/vehicle';
import {NgIf} from '@angular/common';
import {VehicleService} from '../services/vehicle.service';
import{ActivatedRoute,Router} from '@angular/router';
// import {VehicleList} from '../vehicle-list/vehicle-list';


@Component({
  selector: 'app-vehicle-list-item',
  imports: [NgIf],
  templateUrl: './vehicle-list-item.html',
  standalone: true,
  styleUrl: './vehicle-list-item.css'
})
export class VehicleListItem implements  OnInit{
  // vehicle: Vehicle | undefined; //The student to display
  vehicleList: Vehicle[] = [];// to store the list of students
  currentIndex: number = 0;
  error: string | null = null; //Var to hold an error message
   @Input() vehicle?: Vehicle;


  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (vehicles: Vehicle[]) => {
        this.vehicleList = vehicles;
        this.error = null; // Clear any previous errors

        // Subscribe to paramMap changes to update the page view
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.vehicleList.findIndex(user => user.id === id);
            this.vehicle = this.vehicleList[this.currentIndex];
          }
        });
      },
      error: (err) => {
        this.error = 'Error fetching vehicles';
        console.error('Error fetching vehicles:', err);
      }
    });
  }


  toggleSoldStatus(vehicle: Vehicle): void {
    vehicle.isSold = !vehicle.isSold;
  }










}


