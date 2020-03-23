import { Component, OnInit } from '@angular/core';
import { LayoutStateService } from './core/services/layout-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-single-day-calendar';

  constructor(private layout: LayoutStateService) {}

  ngOnInit() {
    window.layOutDay = this.layOutDay;
  }

  private layOutDay(events: CalendarEvent[]) {
    this.layout.setLayout(events);
  }
}
