import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventStateService } from './services/event-state.service';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [BrowserModule],
  exports: [LayoutComponent],
  providers: [EventStateService],
})
export class CoreModule {}
