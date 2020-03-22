import { Component, OnInit } from '@angular/core';
import { EventStateService } from './core/services/event-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-single-day-calendar';

  constructor(private eventStateService: EventStateService) {}

  ngOnInit() {
    window.layOutDay = this.layOutDay;
  }

  private layOutDay(events: CalenderEvent[]) {
    this.eventStateService.setEvents(events);
  }
}
