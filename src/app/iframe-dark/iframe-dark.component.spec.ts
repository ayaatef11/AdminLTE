import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeDarkComponent } from './iframe-dark.component';

describe('IframeDarkComponent', () => {
  let component: IframeDarkComponent;
  let fixture: ComponentFixture<IframeDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeDarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
