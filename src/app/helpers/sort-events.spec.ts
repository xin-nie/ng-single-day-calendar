import { sortEvents } from './sort-events';

describe('sortEvents', () => {
  it('sort events by start time first', () => {
    const events = [
      { start: 40, end: 150 },
      { start: 30, end: 150 },
    ];
    const sorted = sortEvents(events);
    expect(sorted).toEqual([
      { start: 30, end: 150 },
      { start: 40, end: 150 },
    ]);
  });

  it('sort events by end time if start time is same', () => {
    const events = [
      { start: 30, end: 170 },
      { start: 30, end: 150 },
    ];
    const sorted = sortEvents(events);
    expect(sorted).toEqual([
      { start: 30, end: 150 },
      { start: 30, end: 170 },
    ]);
  });
});
