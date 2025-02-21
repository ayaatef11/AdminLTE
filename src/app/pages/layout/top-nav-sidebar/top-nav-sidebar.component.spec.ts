import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavSidebarComponent } from './top-nav-sidebar.component';

describe('TopNavSidebarComponent', () => {
  let component: TopNavSidebarComponent;
  let fixture: ComponentFixture<TopNavSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
