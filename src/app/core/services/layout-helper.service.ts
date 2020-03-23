import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutHelperService {
  buildLayoutState(events: CalenderEvent[]) {
    const groups = this.groupConflictEvents(events);
    return groups.map((group) => this.layoutGroupByColumns(group));
  }

  private groupConflictEvents(events: CalenderEvent[]) {
    let group: CalenderEvent[] = [];
    let groupEnd = -1;
    return this.sortEvents(events).reduce<CalenderEvent[][]>(
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

  private layoutGroupByColumns(group: CalenderEvent[]) {
    return group.reduce<CalenderEvent[][]>((columns, event) => {
      const insertableColumn = columns.find(
        (col) => !this.hasTimeConflict(col[col.length - 1], event)
      );
      insertableColumn ? insertableColumn.push(event) : columns.push([event]);
      return columns;
    }, []);
  }

  private sortEvents(events: CalenderEvent[]) {
    return [...events].sort((a, b) => a.start - b.start || a.end - b.end);
  }

  private hasTimeConflict(a: CalenderEvent, b: CalenderEvent) {
    return a.end > b.start && a.start < b.end;
  }
}
