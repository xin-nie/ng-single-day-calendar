export function hasTimeConflict(a: CalenderEvent, b: CalenderEvent) {
  return a.end > b.start && a.start < b.end;
}
