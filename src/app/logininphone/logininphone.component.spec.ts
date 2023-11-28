import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininphoneComponent } from './logininphone.component';

describe('LogininphoneComponent', () => {
  let component: LogininphoneComponent;
  let fixture: ComponentFixture<LogininphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogininphoneComponent]
    });
    fixture = TestBed.createComponent(LogininphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
