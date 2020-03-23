import { TestBed } from '@angular/core/testing';

import { LayoutStateService } from './layout-state.service';

describe('LayoutStateService', () => {
  let service: LayoutStateService;
  let layoutState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutStateService);
    service.getLayout().subscribe((res) => (layoutState = res));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
