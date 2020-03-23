import { TestBed } from '@angular/core/testing';

import { LayoutStateService } from './layout-state.service';

describe('LayoutStateService', () => {
  let service: LayoutStateService;
  let layoutState: CalenderEvent[][][];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutStateService);
    service.getLayout().subscribe((res) => (layoutState = res));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns initial events layout', () => {
    expect(layoutState).toEqual([
      [[{ start: 30, end: 150 }]],
      [
        [
          { start: 540, end: 600 },
          { start: 610, end: 670 },
        ],
        [{ start: 560, end: 620 }],
      ],
    ]);
  });
});
