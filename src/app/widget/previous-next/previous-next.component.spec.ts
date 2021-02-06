import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousNextComponent } from './previous-next.component';

describe('PreviousNextComponent', () => {
  let component: PreviousNextComponent;
  let fixture: ComponentFixture<PreviousNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
