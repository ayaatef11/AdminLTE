import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleResultsComponent } from './simple-results.component';

describe('SimpleResultsComponent', () => {
  let component: SimpleResultsComponent;
  let fixture: ComponentFixture<SimpleResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
