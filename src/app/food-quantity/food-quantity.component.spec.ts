import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodQuantityComponent } from './food-quantity.component';

describe('FoodQuantityComponent', () => {
  let component: FoodQuantityComponent;
  let fixture: ComponentFixture<FoodQuantityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodQuantityComponent]
    });
    fixture = TestBed.createComponent(FoodQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
