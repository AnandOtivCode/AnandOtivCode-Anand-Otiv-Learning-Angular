import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {VehicleListItem} from './app/vehicle-list-item/vehicle-list-item';
import {VehicleList} from './app/vehicle-list/vehicle-list';
import {ModifyVehicle} from './app/modify-vehicle/modify-vehicle';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {vehicleList} from './app/data/mock-content.data';




const routes: Routes = [
  {path:'', redirectTo: '/vehicles', pathMatch: 'full'}, //default route
  { path: 'vehicles', component: VehicleList },
  { path: 'vehicles/:id', component: VehicleListItem },
   {path:'modify-vehicle', component: ModifyVehicle},
   {path: '**', component:PageNotFound}//Wildcard route for a 404 page
];
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));


// So VehicleList Routing Works
bootstrapApplication(VehicleList, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));

