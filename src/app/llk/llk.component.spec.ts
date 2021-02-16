import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlkComponent } from './llk.component';

describe('LlkComponent', () => {
  let component: LlkComponent;
  let fixture: ComponentFixture<LlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
