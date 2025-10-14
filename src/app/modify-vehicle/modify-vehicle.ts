import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Vehicle} from '../models/vehicle';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleService} from '../services/vehicle.service';

@Component({
  selector: 'app-modify-vehicle',
  imports: [FormsModule,NgIf,ReactiveFormsModule],
  templateUrl: './modify-vehicle.html',
  styleUrl: './modify-vehicle.css'
})
export class ModifyVehicle implements OnInit{
  vehicleForm: FormGroup;
  vehicle: Vehicle | undefined;

//   export interface Vehicle {
//   id: number,
//   type: string,
//   model: string,
//   year: number,
//   km: number,
//   isSold?: boolean
//   img?:string
// }
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) {
    this.vehicleForm = this.fb.group({
      id: ['', Validators.required], //ID is required
      type: [''],//Type is required
      model: [''],
      year: [''],
      km:[''],
      isSold: [false]
    });
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehicleService.getVehicleById(+id).subscribe(vehicle => {
        if(vehicle) {
          this.vehicle = vehicle;

          this.vehicleForm.patchValue(vehicle);
        }
      });
    }
  }


  onDelete(): void {
    const id = this.vehicleForm.get('id')?.value;
    if (id) {
      this.vehicleService.deleteVehicle(id);
      this.router.navigate(['/vehicles']);
    }
  }

  navigateToVehicleList(): void {
    this.router.navigate(['/vehicles']);
  }


  onSubmit(): void {
    const vehicle: Vehicle = this.vehicleForm.value;

    // Check if we're updating an existing student
    if (vehicle.id) {
      this.vehicleService.updateVehicle(vehicle);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.vehicleService.generateNewId(); // This method will create a new ID
      vehicle.id = newId;
      this.vehicleService.addVehicle(vehicle);
    }

    this.router.navigate(['/vehicles']);
  }

}







