import { TestBed } from '@angular/core/testing';

import { PopupHandingService } from './popup-handing.service';

describe('PopupHandingService', () => {
  let service: PopupHandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupHandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
