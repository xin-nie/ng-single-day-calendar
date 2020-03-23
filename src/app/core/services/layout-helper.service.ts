import { Injectable } from '@angular/core';

// hard coded layout metadata
const APP_WIDTH = 600;
const EVENT_BORDER_WITDH = 6;

@Injectable({
  providedIn: 'root',
})
export class LayoutHelperService {
  // 1. find conflict events group
  // 2. place events to columns
  // 3. build layout object base on columns structure
  getLayoutState(events: CalendarEvent[]) {
    const layoutState = [];
    const sortedEvents = this.sortEvents(events);

    let group: CalendarEvent[] = [];
    let groupEnd = -1;
    for (const event of sortedEvents) {
      // a new group starts when event starts after the the group end
      if (event.start > groupEnd) {
        const groupEventLayouts = this.getGroupEventLayouts(group);
        layoutState.push(...groupEventLayouts);
        group = [];
      }

      group.push(event);

      if (event.end > groupEnd) {
        groupEnd = event.end;
      }
    }

    if (group.length > 0) {
      const groupEventLayouts = this.getGroupEventLayouts(group);
      layoutState.push(...groupEventLayouts);
    }

    return layoutState;
  }

  private getGroupEventLayouts(group: CalendarEvent[]) {
    const columns = this.placeGroupToColumns(group);
    return this.buildEventLayouts(columns);
  }

  // place events to left most column possible
  private placeGroupToColumns(group: CalendarEvent[]) {
    return group.reduce<CalendarEvent[][]>((columns, event) => {
      const insertableColumn = columns.find(
        (col) => !this.hasTimeConflict(col[col.length - 1], event)
      );
      insertableColumn ? insertableColumn.push(event) : columns.push([event]);
      return columns;
    }, []);
  }

  private buildEventLayouts(columns: CalendarEvent[][]) {
    const eventLayouts: EventLayout[] = [];

    const numCols = columns.length;
    const width = `${APP_WIDTH / numCols - EVENT_BORDER_WITDH}px`;

    for (const [index, column] of columns.entries()) {
      for (const event of column) {
        const { start, end } = event;
        const height = `${end - start}px`;
        const left = `${(index / numCols) * 100}%`;
        const top = `${start}px`;
        eventLayouts.push({ height, left, top, width });
      }
    }

    return eventLayouts;
  }

  private sortEvents(events: CalendarEvent[]) {
    return [...events].sort((a, b) => a.start - b.start || a.end - b.end);
  }

  private hasTimeConflict(a: CalendarEvent, b: CalendarEvent) {
    return a.end > b.start && a.start < b.end;
  }
}
