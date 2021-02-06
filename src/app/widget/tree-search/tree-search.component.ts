import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { BFSTreeAsync, Tree } from '@jlguenego/tree';
import { BehaviorSubject, Subject } from 'rxjs';

export type ItemToStringFn = (item: unknown | null) => string;

@Component({
  selector: 'app-tree-search',
  templateUrl: './tree-search.component.html',
  styleUrls: ['./tree-search.component.scss'],
})
export class TreeSearchComponent implements OnInit, OnDestroy {
  @Input() delay = 50;
  @Input() bfsTree!: BFSTreeAsync<unknown> | null;
  @Input() height = '40em';
  @Input() itemToString!: ItemToStringFn;

  stack$ = new Subject<Tree<unknown>[]>();
  tree$ = new Subject<Tree<unknown>>();
  currentValue$ = new Subject<Tree<unknown>>();

  testNbr$ = new BehaviorSubject(0);
  maxStackSize$ = new BehaviorSubject(0);
  treeSize$ = new BehaviorSubject(0);

  searching = false;
  finished = false;
  firstTime = true;

  constructor(private zone: NgZone) {
    this.itemToString = (item: unknown | null): string => {
      if (!item) {
        return '';
      }
      return (item as { node: string }).node ?? '';
    };
  }

  ngOnInit(): void {}

  async start(): Promise<void> {
    this.firstTime = false;
    this.finished = false;
    this.searching = true;
    if (!this.bfsTree) {
      return;
    }
    this.bfsTree.interrupt();

    this.bfsTree.subject.subscribe((info) => {
      this.zone.run(() => {
        this.stack$.next(info.stack);
        this.tree$.next(info.tree);
        if (info.currentValue !== undefined) {
          this.currentValue$.next(info.currentValue);
        }
        this.testNbr$.next(info.metrics.testNbr);
        this.maxStackSize$.next(info.metrics.maxStackSize);
        this.treeSize$.next(info.metrics.treeSize);
      });
    });
    const result = await this.bfsTree.search();
    this.searching = false;
    if (result !== undefined) {
      this.finished = true;
    }
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
