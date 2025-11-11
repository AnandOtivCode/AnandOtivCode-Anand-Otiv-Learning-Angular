import {Vehicle} from '../models/vehicle';
//All Vehicle Objects
let vehicle1 :Vehicle = {id: 1, type:"Car", model:"Nissan Sentra", year:2019 , km:15000, isSold:false, img:"images/nissan.jpg",cost:15000};
let vehicle2: Vehicle = {id: 2, type:"Car", model:"Toyota Corolla", year:2020, km:22000, isSold:true, img:"images/toyotaCorolla.jpg",cost:undefined};
let vehicle3: Vehicle = {id: 3, type:"Car", model:"Honda Civic", year:2018, km:30000, isSold:false , img:"images/hondaCivic.jpg",cost:19000};
let vehicle4: Vehicle = {id: 4, type:"SUV", model:"Ford Escape", year:2008, km:12000, isSold:false, img:"images/fordEscape.jpg",cost:5900};
let vehicle5: Vehicle = {id: 5, type:"Truck", model:"Ram 1500", year:2017, km:45000, isSold:true, img:"images/ram1500.jpg",cost:4600};
let vehicle6: Vehicle = {id: 6, type:"Jeep", model:"Compass", year:2023, km:1500, isSold:false, img:"images/jeepCompass.jpg",cost:200};


//Can declare values either way
export const vehicleList: Vehicle[] = //any[] would have worked as well
  [vehicle1,vehicle2, vehicle3,vehicle4,vehicle5,vehicle6]
