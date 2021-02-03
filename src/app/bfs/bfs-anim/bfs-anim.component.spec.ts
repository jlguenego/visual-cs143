import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfsAnimComponent } from './bfs-anim.component';

describe('BfsAnimComponent', () => {
  let component: BfsAnimComponent;
  let fixture: ComponentFixture<BfsAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfsAnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfsAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
