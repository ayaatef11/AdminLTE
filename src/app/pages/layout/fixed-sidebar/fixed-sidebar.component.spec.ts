import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSidebarComponent } from './fixed-sidebar.component';

describe('FixedSidebarComponent', () => {
  let component: FixedSidebarComponent;
  let fixture: ComponentFixture<FixedSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
