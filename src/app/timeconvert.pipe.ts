import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeconvert',
  standalone: true
})
export class TimeConversionPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      return 'Invalid time';
    }

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    if (hours === 0) {
      return `${minutes} minutes`;
    } else if (minutes === 0) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    } else {
      return `${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minutes`;
    }
  }
}