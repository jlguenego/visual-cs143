import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfsBetterThanBfsComponent } from './dfs-better-than-bfs.component';

describe('DfsBetterThanBfsComponent', () => {
  let component: DfsBetterThanBfsComponent;
  let fixture: ComponentFixture<DfsBetterThanBfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfsBetterThanBfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DfsBetterThanBfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
