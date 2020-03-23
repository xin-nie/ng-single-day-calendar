import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutStateService } from './services/layout-state.service';

import { LayoutComponent } from './layout/layout.component';
import { TimelineComponent } from '../features/timeline/timeline.component';

@NgModule({
  declarations: [LayoutComponent, TimelineComponent],
  imports: [BrowserModule],
  exports: [LayoutComponent],
  providers: [LayoutStateService],
})
export class CoreModule {}
