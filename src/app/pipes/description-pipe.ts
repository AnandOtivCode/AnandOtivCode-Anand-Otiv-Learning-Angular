import { Pipe, PipeTransform } from '@angular/core';
import {Vehicle} from '../models/vehicle';

@Pipe({
  name: 'description',
  standalone : true
})
export class DescriptionPipe implements PipeTransform {

  transform(vehicle:Vehicle ): string {
    let description :string = "It cost something";
    //Errors checks
    if (vehicle.cost !== undefined &&vehicle.cost!==null){
      if (vehicle.cost>10000){
        description = "This is an expensive vehicle"
      }

      else if (vehicle.cost>5000){
        description = "This is an average cost vehicle"

      }

      else{
        description = "Nice and cheap vehicle for customers on a budget"

      }

    }

    return `${description}`;
  }

}
