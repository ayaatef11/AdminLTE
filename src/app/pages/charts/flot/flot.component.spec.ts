import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotComponent } from './flot.component';

describe('FlotComponent', () => {
  let component: FlotComponent;
  let fixture: ComponentFixture<FlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
