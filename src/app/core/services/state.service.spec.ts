import { TestBed } from '@angular/core/testing';

import { StateService, INITIAL_STATE } from './state.service';

describe('EventStateService', () => {
  let service: StateService;
  let events: CalenderEvent[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
    service.getEvents().subscribe((res) => (events = res));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial state', () => {
    expect(events).toEqual(INITIAL_STATE);
  });

  it('should set state', () => {
    const newsEvents = [{ start: 30, end: 60 }];
    service.setEvents(newsEvents);
    expect(events).toEqual(events);
  });

  it('should reset state', () => {
    const newEvents = [{ start: 30, end: 60 }];
    service.setEvents(newEvents);
    service.resetEvents();
    expect(events).toEqual(INITIAL_STATE);
  });
});
