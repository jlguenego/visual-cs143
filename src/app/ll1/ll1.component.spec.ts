import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ll1Component } from './ll1.component';

describe('Ll1Component', () => {
  let component: Ll1Component;
  let fixture: ComponentFixture<Ll1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ll1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ll1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
