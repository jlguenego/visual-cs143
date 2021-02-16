import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPredictiveAlgoComponent } from './k-predictive-algo.component';

describe('KPredictiveAlgoComponent', () => {
  let component: KPredictiveAlgoComponent;
  let fixture: ComponentFixture<KPredictiveAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPredictiveAlgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KPredictiveAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
