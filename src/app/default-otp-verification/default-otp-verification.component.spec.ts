import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultOtpVerificationComponent } from './default-otp-verification.component';

describe('DefaultOtpVerificationComponent', () => {
  let component: DefaultOtpVerificationComponent;
  let fixture: ComponentFixture<DefaultOtpVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultOtpVerificationComponent]
    });
    fixture = TestBed.createComponent(DefaultOtpVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
