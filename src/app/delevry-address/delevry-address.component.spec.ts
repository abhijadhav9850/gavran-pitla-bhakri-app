import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelevryAddressComponent } from './delevry-address.component';

describe('DelevryAddressComponent', () => {
  let component: DelevryAddressComponent;
  let fixture: ComponentFixture<DelevryAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelevryAddressComponent]
    });
    fixture = TestBed.createComponent(DelevryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
