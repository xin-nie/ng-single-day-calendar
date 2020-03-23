import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutHelperService {
  buildLayoutState(events: CalendarEvent[]) {
    const groups = this.groupConflictEvents(events);
    return groups.map((group) => this.layoutGroupByColumns(group));
  }

  private groupConflictEvents(events: CalendarEvent[]) {
    let group: CalendarEvent[] = [];
    let groupEnd = -1;
    return this.sortEvents(events).reduce<CalendarEvent[][]>(
      (groups, event) => {
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
      },
      []
    );
  }

  private layoutGroupByColumns(group: CalendarEvent[]) {
    return group.reduce<CalendarEvent[][]>((columns, event) => {
      const insertableColumn = columns.find(
        (col) => !this.hasTimeConflict(col[col.length - 1], event)
      );
      insertableColumn ? insertableColumn.push(event) : columns.push([event]);
      return columns;
    }, []);
  }

  private sortEvents(events: CalendarEvent[]) {
    return [...events].sort((a, b) => a.start - b.start || a.end - b.end);
  }

  private hasTimeConflict(a: CalendarEvent, b: CalendarEvent) {
    return a.end > b.start && a.start < b.end;
  }
}
