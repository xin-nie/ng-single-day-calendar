import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const INITIAL_EVENTS = [
  { start: 30, end: 150 },
  { start: 540, end: 600 },
  { start: 560, end: 620 },
  { start: 610, end: 670 },
];

@Injectable({
  providedIn: 'root',
})
export class EventsStoreService {
  constructor() {}

  private initialEvents: CalenderEvent[] = INITIAL_EVENTS;

  private events = new BehaviorSubject<CalenderEvent[]>(this.initialEvents);

  getEvents(): Observable<CalenderEvent[]> {
    return this.events.asObservable();
  }

  setEvents(events: CalenderEvent[]) {
    this.events.next(events);
  }
}
