import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsgridComponent } from './isgrid.component';

describe('IsgridComponent', () => {
  let component: IsgridComponent;
  let fixture: ComponentFixture<IsgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsgridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
