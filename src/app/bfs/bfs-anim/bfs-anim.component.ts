import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import {
  BFSTreeAsync,
  BFSTreeAsyncGetChildrenFn,
  BFSTreeAsyncTestValueFn,
  Tree,
} from '@jlguenego/tree';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bfs-anim',
  templateUrl: './bfs-anim.component.html',
  styleUrls: ['./bfs-anim.component.scss'],
})
export class BfsAnimComponent implements OnInit, OnDestroy {
  @Input() rootValue = '1';
  @Input() test!: BFSTreeAsyncTestValueFn<string>;
  @Input() getChildren!: BFSTreeAsyncGetChildrenFn<string>;

  stack$ = new Subject<{ node: string }[]>();
  tree$ = new Subject<Tree<string>>();
  currentValue$ = new Subject<Tree<string>>();

  bfsTree!: BFSTreeAsync<string>;

  searching = false;
  finished = false;
  firstTime = true;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {}

  async start(): Promise<void> {
    this.firstTime = false;
    this.finished = false;
    this.searching = true;
    if (this.bfsTree) {
      this.bfsTree.interrupt();
    }
    this.bfsTree = new BFSTreeAsync<string>(
      this.rootValue,
      this.test,
      this.getChildren
    );
    this.bfsTree.subject.subscribe((info) => {
      console.log('info: ', info);
      this.zone.run(() => {
        this.stack$.next(info.stack);
        this.tree$.next(info.tree);
        if (info.currentValue !== undefined) {
          this.currentValue$.next(info.currentValue);
        }
      });
    });
    const result = await this.bfsTree.search();
    this.searching = false;
    if (result !== undefined) {
      this.finished = true;
    }
    console.log('result: ', result);
  }

  stop(): void {
    if (this.bfsTree) {
      this.bfsTree.interrupt();
      this.searching = false;
      this.finished = false;
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
