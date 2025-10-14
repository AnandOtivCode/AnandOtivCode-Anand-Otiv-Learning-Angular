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
   @Input() vehicle?: Vehicle;


  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) {}


  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(vehicles => {

      this.vehicleList = vehicles;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {

        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.vehicleList.findIndex(user => user.id === id);
          this.vehicle = this.vehicleList[this.currentIndex];


      }


    });

  });
}


  toggleSoldStatus(vehicle: Vehicle): void {
    vehicle.isSold = !vehicle.isSold;
  }










}


