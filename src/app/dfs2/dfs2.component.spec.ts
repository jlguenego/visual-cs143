import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfs2Component } from './dfs2.component';

describe('Dfs2Component', () => {
  let component: Dfs2Component;
  let fixture: ComponentFixture<Dfs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dfs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
