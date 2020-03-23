import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarContainerComponent } from './calendar.container';
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [CalendarContainerComponent, CalendarComponent],
  imports: [CommonModule],
  exports: [CalendarContainerComponent],
})
export class CalendarModule {}
