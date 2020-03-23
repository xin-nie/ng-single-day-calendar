import { layoutGroupByColumns } from './layout-group-by-columns';

describe('layoutGroupByColumns', () => {
  it('layout group to columns by time', () => {
    const group = [
      { start: 540, end: 600 },
      { start: 560, end: 620 },
      { start: 610, end: 670 },
    ];
    const columns = layoutGroupByColumns(group);
    expect(columns).toEqual([
      [
        { start: 540, end: 600 },
        { start: 610, end: 670 },
      ],
      [{ start: 560, end: 620 }],
    ]);
  });

  it('layout single group to single columns', () => {
    const group = [{ start: 540, end: 600 }];
    const columns = layoutGroupByColumns(group);
    expect(columns).toEqual([[{ start: 540, end: 600 }]]);
  });

  it('layout same time events to different column', () => {
    const group = [
      { start: 540, end: 600 },
      { start: 540, end: 600 },
      { start: 540, end: 600 },
    ];
    const columns = layoutGroupByColumns(group);
    expect(columns).toEqual([
      [{ start: 540, end: 600 }],
      [{ start: 540, end: 600 }],
      [{ start: 540, end: 600 }],
    ]);
  });
});
