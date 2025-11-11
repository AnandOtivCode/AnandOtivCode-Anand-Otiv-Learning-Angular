import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {VehicleListItem} from './app/vehicle-list-item/vehicle-list-item';
import {VehicleList} from './app/vehicle-list/vehicle-list';
import {ModifyVehicle} from './app/modify-vehicle/modify-vehicle';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {vehicleList} from './app/data/mock-content.data';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './app/services/in-memory-data.service';







// const routes: Routes = [
//   {path:'', redirectTo: '/vehicles', pathMatch: 'full'}, //default route
//   { path: 'vehicles', component: VehicleList }, //Eagerly Loaded
//   { path: 'vehicles/:id', component: VehicleListItem },
//    {path:'modify-vehicle', component: ModifyVehicle},
//    {path: '**', component:PageNotFound}//Wildcard route for a 404 page
// ];
const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' }, //Default route
  { path: 'vehicles', component: VehicleList },     //eagerly loaded
  { path: 'vehicles/:id',
    loadComponent: () =>
      import('./app/vehicle-list-item/vehicle-list-item').then(m => m.VehicleListItem) }, //Lazy Loaded
  { path: 'modify-vehicle',
    loadComponent: () =>
      import('./app/modify-vehicle/modify-vehicle').then(m => m.ModifyVehicle) },
  { path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found').then(m => m.PageNotFound) },
];
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 300 }))]
}).then(r => console.log('Bootstrap successful'));




// // So VehicleList Routing Works
// bootstrapApplication(VehicleList, {
//   providers: [provideRouter(routes)]
// }).then(r => console.log('Bootstrap successful'));

