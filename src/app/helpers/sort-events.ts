export function sortEvents(events: CalenderEvent[]) {
  return [...events].sort((a, b) => a.start - b.start || a.end - b.end);
}
