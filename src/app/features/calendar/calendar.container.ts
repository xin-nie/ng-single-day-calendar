import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LayoutStateService } from '../../core/services/layout-state.service';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar.container.html',
})
export class CalendarContainerComponent implements OnInit, OnDestroy {
  currentLayout: EventLayout[];
  subscription: Subscription;

  constructor(private layout: LayoutStateService) {}

  ngOnInit() {
    this.subscription = this.layout.getLayout().subscribe(
      (res) => {
        this.currentLayout = res;
      },
      (err) => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
