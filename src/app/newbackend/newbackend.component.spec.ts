import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbackendComponent } from './newbackend.component';

describe('NewbackendComponent', () => {
  let component: NewbackendComponent;
  let fixture: ComponentFixture<NewbackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewbackendComponent]
    });
    fixture = TestBed.createComponent(NewbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
