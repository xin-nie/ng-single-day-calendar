import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Event {
  start: number;
  end: number;
}

export const INITIAL_STATE = [
  { start: 30, end: 150 },
  { start: 540, end: 600 },
  { start: 560, end: 620 },
  { start: 610, end: 670 },
];

@Injectable({
  providedIn: 'root',
})
export class EventStateService {
  constructor() {}

  private initialEvents: Event[] = INITIAL_STATE;

  private eventState = new BehaviorSubject<Event[]>(this.initialEvents);

  getEvents(): Observable<Event[]> {
    return this.eventState.asObservable();
  }

  setEvents(events: Event[]) {
    this.eventState.next(events);
  }

  resetEvents() {
    this.eventState.next(this.initialEvents);
  }
}
