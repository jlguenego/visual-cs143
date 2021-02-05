import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bfs1',
  templateUrl: './bfs1.component.html',
  styleUrls: ['./bfs1.component.scss'],
})
export class Bfs1Component implements OnInit {
  f = new FormGroup({
    delay: new FormControl(10),
  });

  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  constructor() {}

  ngOnInit(): void {}
}
