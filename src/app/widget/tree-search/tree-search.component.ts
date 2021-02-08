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
  @Input() bfsTree = new BFSTreeAsync<unknown>(
    0,
    async () => true,
    async () => []
  );
  @Input() height = '40em';

  stack$ = new Subject<Tree<unknown>[]>();
  tree$ = new Subject<Tree<unknown>>();
  currentValue$ = new Subject<Tree<unknown>>();

  testNbr$ = new BehaviorSubject(0);
  maxStackSize$ = new BehaviorSubject(0);
  treeSize$ = new BehaviorSubject(0);

  firstTime = true;

  constructor(private zone: NgZone) {
    this.itemToString = (item: unknown | null): string => {
      if (!item) {
        return '';
      }
      return (item as { node: string }).node ?? '';
    };
  }

  @Input() itemToString: ItemToStringFn = () => '';

  ngOnInit(): void {
    this.bfsTree.subject.subscribe((info) => {
      this.zone.run(() => {
        this.stack$.next(info.stack);
        this.tree$.next(info.tree);
        this.currentValue$.next(info.currentValue);
        this.testNbr$.next(info.metrics.testNbr);
        this.maxStackSize$.next(info.metrics.maxStackSize);
        this.treeSize$.next(info.metrics.treeSize);
      });
    });
  }

  async start(): Promise<void> {
    if (this.bfsTree.found) {
      this.bfsTree.reset();
    }
    await this.bfsTree.search();
    this.firstTime = false;
  }

  stop(): void {
    this.bfsTree.interrupt();
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
