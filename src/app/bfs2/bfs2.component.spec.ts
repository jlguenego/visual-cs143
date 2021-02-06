import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfs2Component } from './bfs2.component';

describe('Bfs2Component', () => {
  let component: Bfs2Component;
  let fixture: ComponentFixture<Bfs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bfs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
