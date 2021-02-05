import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-bfs',
  templateUrl: './bfs.component.html',
  styleUrls: ['./bfs.component.scss'],
})
export class BfsComponent implements OnInit {
  f = new FormGroup({
    delay: new FormControl(1000),
  });

  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  test = async (n: string) => +n > 10;
  async getChildren(str: string): Promise<string[]> {
    const n = +str;
    const delay = +this.f.value.delay;
    await timer(delay).toPromise();
    return [n + 1, n + 2].map((x) => '' + x);
  }

  constructor() {}

  ngOnInit(): void {}
}
