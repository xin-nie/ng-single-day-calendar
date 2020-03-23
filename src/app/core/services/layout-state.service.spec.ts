import { TestBed } from '@angular/core/testing';

import { LayoutStateService } from './layout-state.service';

describe('LayoutStateService', () => {
  let service: LayoutStateService;
  let layoutState: EventLayout[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutStateService);
    service.getLayout().subscribe((res) => (layoutState = res));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rerturn initial events layout', () => {
    const eventLayouts = [
      { top: '30px', width: '594px', height: '120px', left: '0%' },
      { top: '540px', width: '294px', height: '60px', left: '0%' },
      { top: '610px', width: '294px', height: '60px', left: '0%' },
      { top: '560px', width: '294px', height: '60px', left: '50%' },
    ];
    expect(layoutState).toEqual(eventLayouts);
  });
});
