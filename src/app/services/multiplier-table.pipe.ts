import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'multiplierTable'
})


export class MultiplierTablePipe implements PipeTransform{
  transform(value: any, tableNumber: number) {
    return `${value} X ${tableNumber} =`+ value *tableNumber;
  }
}