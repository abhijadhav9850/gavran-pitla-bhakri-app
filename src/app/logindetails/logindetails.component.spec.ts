import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindetailsComponent } from './logindetails.component';

describe('LogindetailsComponent', () => {
  let component: LogindetailsComponent;
  let fixture: ComponentFixture<LogindetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogindetailsComponent]
    });
    fixture = TestBed.createComponent(LogindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
