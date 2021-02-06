import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfs3Component } from './bfs3.component';

describe('Bfs3Component', () => {
  let component: Bfs3Component;
  let fixture: ComponentFixture<Bfs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfs3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bfs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
