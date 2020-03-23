import { TestBed } from '@angular/core/testing';

import { LayoutHelperService } from './layout-helper.service';

describe('LayoutHelperService', () => {
  let service: LayoutHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return layout by conflict group', () => {
    const events = [
      { start: 30, end: 150 },
      { start: 540, end: 600 },
      { start: 560, end: 620 },
      { start: 610, end: 670 },
    ];
    const expectLayout = [
      [[{ start: 30, end: 150 }]],
      [
        [
          { start: 540, end: 600 },
          { start: 610, end: 670 },
        ],
        [{ start: 560, end: 620 }],
      ],
    ];
    expect(service.buildLayoutState(events)).toEqual(expectLayout);
  });
});
