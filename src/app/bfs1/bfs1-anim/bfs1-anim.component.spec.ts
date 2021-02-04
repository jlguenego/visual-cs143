import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfs1AnimComponent } from './bfs1-anim.component';

describe('Bfs1AnimComponent', () => {
  let component: Bfs1AnimComponent;
  let fixture: ComponentFixture<Bfs1AnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfs1AnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bfs1AnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
