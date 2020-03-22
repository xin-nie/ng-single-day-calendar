import { TestBed } from '@angular/core/testing';

import { EventStateService, INITIAL_STATE, Event } from './event-state.service';

describe('EventStateService', () => {
  let service: EventStateService;
  let events: Event[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventStateService);
    service.getEvents().subscribe(
      res => events = res
    )
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial state', () => {
    expect(events).toEqual(INITIAL_STATE);
  })

  it('should set state', () => {
    const newsEvents = [{ start: 30, end: 60}];
    service.setEvents(newsEvents);
    expect(events).toEqual(events);
  })

  it('should reset state', () => {
    const newEvents = [{ start: 30, end: 60}];
    service.setEvents(newEvents);
    service.resetEvents();
    expect(events).toEqual(INITIAL_STATE);
  })
});