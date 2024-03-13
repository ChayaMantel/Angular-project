import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConversionPipe',
  standalone: true
})
export class TimeConversionPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
