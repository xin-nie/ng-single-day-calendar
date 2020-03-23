import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes/time.pipe';
import { PeriodPipe } from './pipes/period.pipe';

@NgModule({
  declarations: [TimePipe, PeriodPipe],
  imports: [CommonModule],
  exports: [TimePipe, PeriodPipe],
})
export class SharedModule {}
