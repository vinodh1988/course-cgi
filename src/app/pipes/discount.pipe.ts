import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: any, params?: any): any {
    if(price>20000)
      return price-price*0.12;
    else if(price>17000)
      return price-price*0.10;
    else if(price>=14000)
      return price-price*0.08;
    else if(price>=10000)
      return price-price*0.05;
    return price-price*0.03;
  }

}
