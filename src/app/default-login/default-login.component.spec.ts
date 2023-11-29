import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginComponent } from './default-login.component';

describe('DefaultLoginComponent', () => {
  let component: DefaultLoginComponent;
  let fixture: ComponentFixture<DefaultLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultLoginComponent]
    });
    fixture = TestBed.createComponent(DefaultLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
