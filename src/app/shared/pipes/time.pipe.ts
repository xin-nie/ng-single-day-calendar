import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(minutesSince9am: number): string {
    const hours = Math.floor(minutesSince9am / 60) + 9;
    const minutes = minutesSince9am % 60;
    return `${hours % 12 || hours}:${String(minutes).padStart(2, '0')}`;
  }
}
