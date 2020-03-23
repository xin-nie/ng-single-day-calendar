import { hasTimeConflict } from './has-time-conflict';

export function layoutGroupByColumns(group: CalenderEvent[]) {
  return group.reduce<CalenderEvent[][]>((columns, event) => {
    const insertableColumn = columns.find(
      (col) => !hasTimeConflict(col[col.length - 1], event)
    );
    insertableColumn ? insertableColumn.push(event) : columns.push([event]);
    return columns;
  }, []);
}
