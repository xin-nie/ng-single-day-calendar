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

  private initialLayout = this.layoutHelperService.buildLayoutState(
    INITIAL_EVENTS
  );
  private layout = new BehaviorSubject(this.initialLayout);

  getLayout() {
    return this.layout.asObservable();
  }

  setLayout(events: CalenderEvent[]) {
    const layout = this.layoutHelperService.buildLayoutState(events);
    this.layout.next(layout);
  }
}
