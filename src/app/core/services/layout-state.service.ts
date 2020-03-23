import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LayoutHelperService } from './layout-helper.service';

export const INITIAL_EVENTS = [
  { start: 30, end: 150 },
  { start: 540, end: 600 },
  { start: 560, end: 620 },
  { start: 610, end: 670 },
];

@Injectable({
  providedIn: 'root',
})
export class LayoutStateService {
  constructor(private layoutHelperService: LayoutHelperService) {}

  private initialLayout = this.layoutHelperService.getLayoutState(
    INITIAL_EVENTS
  );
  private state = new BehaviorSubject(this.initialLayout);

  getLayout() {
    return this.state.asObservable();
  }

  setLayout(events: CalendarEvent[]) {
    const layout = this.layoutHelperService.getLayoutState(events);
    this.state.next(layout);
  }
}
