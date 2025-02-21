import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTopnavComponent } from './fixed-topnav.component';

describe('FixedTopnavComponent', () => {
  let component: FixedTopnavComponent;
  let fixture: ComponentFixture<FixedTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedTopnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
