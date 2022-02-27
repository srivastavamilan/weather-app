import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
})
export class TempPipe implements PipeTransform {
  transform(n: number) {
    return Math.round(n - 273.15);
  }
}
