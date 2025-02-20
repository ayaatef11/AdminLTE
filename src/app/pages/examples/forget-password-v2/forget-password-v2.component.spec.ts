import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordV2Component } from './forget-password-v2.component';

describe('ForgetPasswordV2Component', () => {
  let component: ForgetPasswordV2Component;
  let fixture: ComponentFixture<ForgetPasswordV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
