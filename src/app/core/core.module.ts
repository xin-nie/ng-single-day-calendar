import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StateService } from './services/state.service';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [BrowserModule],
  exports: [LayoutComponent],
  providers: [StateService],
})
export class CoreModule {}
