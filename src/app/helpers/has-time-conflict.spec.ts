import { hasTimeConflict } from './has-time-conflict';

describe('hasTimeConflict', () => {
  it('returns true if 2 events have time conflict', () => {
    const a = { start: 30, end: 60 };
    const b = { start: 40, end: 60 };
    expect(hasTimeConflict(a, b)).toBe(true);
  });

  it('returns false if 2 events have no time conflict', () => {
    const a = { start: 30, end: 60 };
    const b = { start: 65, end: 90 };
    expect(hasTimeConflict(a, b)).toBe(false);
  });
});
