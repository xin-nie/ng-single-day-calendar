import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimelineModule } from '../features/timeline/timeline.module';

import { LayoutStateService } from './services/layout-state.service';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [BrowserModule, TimelineModule],
  exports: [LayoutComponent],
  providers: [LayoutStateService],
})
export class CoreModule {}
