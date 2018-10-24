import { Pipe, PipeTransform } from '@angular/core';
import {course} from "../models/course";
@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(courses: course[], pricetype: string): any {
    
    if(pricetype==="High Price")
       return courses.filter(x=>x.price>=18000);
    else if(pricetype==="Moderate Price")
       return courses.filter(x=>x.price>=13000);
    else if(pricetype==="Low Price")
       return courses.filter(x=>x.price<13000);
    else
       return courses;
  }

}
