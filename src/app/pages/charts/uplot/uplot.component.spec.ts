import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplotComponent } from './uplot.component';

describe('UplotComponent', () => {
  let component: UplotComponent;
  let fixture: ComponentFixture<UplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UplotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
