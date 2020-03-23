import { TestBed } from '@angular/core/testing';

import { EventsStoreService, INITIAL_EVENTS } from './events-store.service';

describe('EventsStoreService', () => {
  let service: EventsStoreService;
  let events: CalenderEvent[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsStoreService);
    service.getEvents().subscribe((res) => (events = res));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial state', () => {
    expect(events).toEqual(INITIAL_EVENTS);
  });

  it('should set state', () => {
    const newsEvents = [{ start: 30, end: 60 }];
    service.setEvents(newsEvents);
    expect(events).toEqual(events);
  });
});
