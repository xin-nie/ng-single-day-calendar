import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  it('create an instance', () => {
    const pipe = new TimePipe();
    expect(pipe).toBeTruthy();
  });

  it('returns time', () => {
    const pipe = new TimePipe();
    expect(pipe.transform(30)).toBe('9:30');
  });

  it('returns time in PM', () => {
    const pipe = new TimePipe();
    expect(pipe.transform(540)).toBe('6:00');
  });
});
