import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-bfs',
  templateUrl: './bfs.component.html',
  styleUrls: ['./bfs.component.scss'],
})
export class BfsComponent implements OnInit {
  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  test = async (n: string) => +n > 10;
  async getChildren(str: string): Promise<string[]> {
    const n = +str;
    await timer(1500).toPromise();
    return [n + 1, n + 2].map((x) => '' + x);
  }

  constructor() {}

  ngOnInit(): void {}
}
