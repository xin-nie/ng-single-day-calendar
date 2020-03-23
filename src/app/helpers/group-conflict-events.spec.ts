import { groupConflictEvents } from './group-conflict-events';

describe('groupConflictEvents', () => {
  it('group events with time conflict', () => {
    const events = [
      { start: 30, end: 150 },
      { start: 540, end: 600 },
      { start: 560, end: 620 },
      { start: 610, end: 670 },
    ];
    const grouped = groupConflictEvents(events);
    expect(grouped).toEqual([
      [{ start: 30, end: 150 }],
      [
        { start: 540, end: 600 },
        { start: 560, end: 620 },
        { start: 610, end: 670 },
      ],
    ]);
  });
});
