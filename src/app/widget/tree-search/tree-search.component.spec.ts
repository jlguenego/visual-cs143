import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSearchComponent } from './tree-search.component';

describe('TreeSearchComponent', () => {
  let component: TreeSearchComponent;
  let fixture: ComponentFixture<TreeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
