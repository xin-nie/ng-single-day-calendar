import { sortEvents } from './sort-events';

export function groupConflictEvents(events: CalenderEvent[]) {
  let group: CalenderEvent[] = [];
  let groupEnd = -1;
  return sortEvents(events).reduce<CalenderEvent[][]>((groups, event) => {
    // event belongs to a new group if starts after the the group end
    if (groupEnd < event.start) {
      group = [];
      groups.push(group);
    }
    // event belongs to current group if starts before the group end
    group.push(event);

    if (event.end > groupEnd) {
      groupEnd = event.end;
    }

    return groups;
  }, []);
}
