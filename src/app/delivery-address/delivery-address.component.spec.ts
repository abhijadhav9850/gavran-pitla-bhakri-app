import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddressComponent } from './delivery-address.component';

describe('DeliveryAddressComponent', () => {
  let component: DeliveryAddressComponent;
  let fixture: ComponentFixture<DeliveryAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryAddressComponent]
    });
    fixture = TestBed.createComponent(DeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
