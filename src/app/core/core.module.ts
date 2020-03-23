import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsStoreService } from '../services/events-store.service';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [BrowserModule],
  exports: [LayoutComponent],
  providers: [EventsStoreService],
})
export class CoreModule {}
