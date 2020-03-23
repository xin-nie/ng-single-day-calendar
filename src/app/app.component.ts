import { Component, OnInit } from '@angular/core';
import { EventsStoreService } from './services/events-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-single-day-calendar';

  constructor(private stateService: EventsStoreService) {}

  ngOnInit() {
    window.layOutDay = this.layOutDay;
  }

  private layOutDay(events: CalenderEvent[]) {
    this.stateService.setEvents(events);
  }
}
