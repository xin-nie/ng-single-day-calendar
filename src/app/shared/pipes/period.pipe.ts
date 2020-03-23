import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'period',
})
export class PeriodPipe implements PipeTransform {
  transform(minutesSince9am: number): string {
    const hours = Math.floor(minutesSince9am / 60) + 9;
    const isOnHour = minutesSince9am % 60 === 0;
    return isOnHour ? `${hours > 12 ? 'PM' : 'AM'}` : '';
  }
}
