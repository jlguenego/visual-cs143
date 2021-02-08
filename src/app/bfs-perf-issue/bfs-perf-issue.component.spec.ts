import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfsPerfIssueComponent } from './bfs-perf-issue.component';

describe('BfsPerfIssueComponent', () => {
  let component: BfsPerfIssueComponent;
  let fixture: ComponentFixture<BfsPerfIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfsPerfIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfsPerfIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
