import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfs1Component } from './bfs1.component';

describe('Bfs1Component', () => {
  let component: Bfs1Component;
  let fixture: ComponentFixture<Bfs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bfs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
