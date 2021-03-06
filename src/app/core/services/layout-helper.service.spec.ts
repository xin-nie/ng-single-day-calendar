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

  it('should return layout object for each events', () => {
    const events = [
      { start: 30, end: 150 },
      { start: 540, end: 600 },
      { start: 560, end: 620 },
      { start: 610, end: 670 },
    ];
    const eventLayouts = [
      { top: '30px', width: '594px', height: '120px', left: '0%' },
      { top: '540px', width: '294px', height: '60px', left: '0%' },
      { top: '610px', width: '294px', height: '60px', left: '0%' },
      { top: '560px', width: '294px', height: '60px', left: '50%' },
    ];
    expect(service.getLayoutState(events)).toEqual(eventLayouts);
  });
});
