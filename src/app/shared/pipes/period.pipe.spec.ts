import { PeriodPipe } from './period.pipe';

describe('PeriodPipe', () => {
  it('create an instance', () => {
    const pipe = new PeriodPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns period if time is on hour', () => {
    const pipe = new PeriodPipe();
    expect(pipe.transform(60)).toBe('AM');
  });

  it('returns empty string if not on hour', () => {
    const pipe = new PeriodPipe();
    expect(pipe.transform(30)).toBe('');
  });
});
