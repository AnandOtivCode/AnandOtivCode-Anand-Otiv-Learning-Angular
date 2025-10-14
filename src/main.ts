import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {VehicleListItem} from './app/vehicle-list-item/vehicle-list-item';
import {VehicleList} from './app/vehicle-list/vehicle-list';




const routes: Routes = [
  {path:'', redirectTo: '/vehicles', pathMatch: 'full'}, //default route
  { path: 'vehicles', component: VehicleList },
  { path: 'vehicles/:id', component: VehicleListItem },
  // {path:'modify-student', component: ModifyStudentComponent},
  // {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

