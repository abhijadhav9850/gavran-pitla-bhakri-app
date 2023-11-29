import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefultUserLoginComponent } from './defult-user-login.component';

describe('DefultUserLoginComponent', () => {
  let component: DefultUserLoginComponent;
  let fixture: ComponentFixture<DefultUserLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefultUserLoginComponent]
    });
    fixture = TestBed.createComponent(DefultUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
