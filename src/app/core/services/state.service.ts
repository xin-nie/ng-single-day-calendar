import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const INITIAL_STATE = [
  { start: 30, end: 150 },
  { start: 540, end: 600 },
  { start: 560, end: 620 },
  { start: 610, end: 670 },
];

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  private initialEvents: CalenderEvent[] = INITIAL_STATE;

  private state = new BehaviorSubject<CalenderEvent[]>(this.initialEvents);

  getEvents(): Observable<CalenderEvent[]> {
    return this.state.asObservable();
  }

  setEvents(events: CalenderEvent[]) {
    this.state.next(events);
  }

  resetEvents() {
    this.state.next(this.initialEvents);
  }
}
