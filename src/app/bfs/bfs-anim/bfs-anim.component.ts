import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import {
  BFSTreeAsync,
  BFSTreeAsyncGetChildrenFn,
  BFSTreeAsyncTestValueFn,
  Tree,
} from '@jlguenego/tree';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bfs-anim',
  templateUrl: './bfs-anim.component.html',
  styleUrls: ['./bfs-anim.component.scss'],
})
export class BfsAnimComponent implements OnInit, OnDestroy {
  @Input() rootValue = '1';
  @Input() test!: BFSTreeAsyncTestValueFn<string>;
  @Input() getChildren!: BFSTreeAsyncGetChildrenFn<string>;

  stack$ = new BehaviorSubject<{ node: string }[]>([]);
  tree$ = new BehaviorSubject<Tree<string>>(new Tree<string>(''));
  currentValue$ = new BehaviorSubject<Tree<string>>(new Tree<string>(''));

  bfsTree!: BFSTreeAsync<string>;

  searching = false;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.restart();
  }

  async restart(): Promise<void> {
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
    console.log('result: ', result);
  }

  ngOnDestroy(): void {
    if (this.bfsTree) {
      this.bfsTree.interrupt();
    }
  }
}
