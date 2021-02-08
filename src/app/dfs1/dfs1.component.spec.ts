import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfs1Component } from './dfs1.component';

describe('Dfs1Component', () => {
  let component: Dfs1Component;
  let fixture: ComponentFixture<Dfs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dfs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
