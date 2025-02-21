import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedResultsComponent } from './enhanced-results.component';

describe('EnhancedResultsComponent', () => {
  let component: EnhancedResultsComponent;
  let fixture: ComponentFixture<EnhancedResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancedResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhancedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
