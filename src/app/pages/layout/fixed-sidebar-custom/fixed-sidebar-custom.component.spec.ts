import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSidebarCustomComponent } from './fixed-sidebar-custom.component';

describe('FixedSidebarCustomComponent', () => {
  let component: FixedSidebarCustomComponent;
  let fixture: ComponentFixture<FixedSidebarCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedSidebarCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedSidebarCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
