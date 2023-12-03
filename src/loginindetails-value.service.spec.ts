import { TestBed } from '@angular/core/testing';

import { LoginindetailsValueService } from './loginindetails-value.service';

describe('LoginindetailsValueService', () => {
  let service: LoginindetailsValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginindetailsValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
