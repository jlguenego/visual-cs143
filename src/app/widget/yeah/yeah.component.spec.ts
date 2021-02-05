import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeahComponent } from './yeah.component';

describe('YeahComponent', () => {
  let component: YeahComponent;
  let fixture: ComponentFixture<YeahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
