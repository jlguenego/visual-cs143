import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bfs2',
  templateUrl: './bfs2.component.html',
  styleUrls: ['./bfs2.component.scss'],
})
export class Bfs2Component implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  constructor() {}

  ngOnInit(): void {}
}
