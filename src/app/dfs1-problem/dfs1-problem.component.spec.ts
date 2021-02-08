import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfs1ProblemComponent } from './dfs1-problem.component';

describe('Dfs1ProblemComponent', () => {
  let component: Dfs1ProblemComponent;
  let fixture: ComponentFixture<Dfs1ProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfs1ProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dfs1ProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
