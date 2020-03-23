import { Component, OnInit } from '@angular/core';
import { StateService } from './core/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-single-day-calendar';

  constructor(private stateService: StateService) {}

  ngOnInit() {
    window.layOutDay = this.layOutDay;
  }

  private layOutDay(events: CalenderEvent[]) {
    this.stateService.setEvents(events);
  }
}
