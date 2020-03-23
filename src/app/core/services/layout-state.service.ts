import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { groupConflictEvents } from '../../helpers/group-conflict-events';
import { layoutGroupByColumns } from '../../helpers/layout-group-by-columns';

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
  private initialLayout = this.buildLayoutState(INITIAL_EVENTS);
  private layout = new BehaviorSubject(this.initialLayout);

  getLayout() {
    return this.layout.asObservable();
  }

  setLayout(events: CalenderEvent[]) {
    const layout = this.buildLayoutState(events);
    this.layout.next(layout);
  }

  private buildLayoutState(events: CalenderEvent[]) {
    const groups = groupConflictEvents(events);
    return groups.map((group) => layoutGroupByColumns(group));
  }
}
