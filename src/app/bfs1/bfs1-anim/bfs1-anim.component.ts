import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { BFSTreeAsync, Tree } from '@jlguenego/tree';
import {
  CFGSpec,
  CFGSpecifications,
  ContextFreeGrammar,
  defineNonTerminalAlphabet,
  defineTerminalAlphabet,
  getBFSTreeAsync,
  Sentence,
} from '@jlguenego/syntax-analysis';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { PartialParseTree } from '@jlguenego/syntax-analysis';

@Component({
  selector: 'app-bfs1-anim',
  templateUrl: './bfs1-anim.component.html',
  styleUrls: ['./bfs1-anim.component.scss'],
})
export class Bfs1AnimComponent implements OnInit, OnDestroy {
  @Input() delay = 1000;

  stack$ = new Subject<Tree<PartialParseTree>[]>();
  tree$ = new Subject<Tree<PartialParseTree>>();
  currentValue$ = new Subject<Tree<PartialParseTree>>();

  testNbr$ = new BehaviorSubject(0);
  maxStackSize$ = new BehaviorSubject(0);
  treeSize$ = new BehaviorSubject(0);

  bfsTree!: BFSTreeAsync<PartialParseTree>;

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
    const t = defineTerminalAlphabet(['+', 'int', '(', ')'] as const);
    const nt = defineNonTerminalAlphabet(['E', 'T'] as const);

    const spec: CFGSpecifications<typeof t, typeof nt> = {
      startSymbol: 'E',
      productions: [
        { LHS: 'E', RHS: ['T'] },
        { LHS: 'E', RHS: ['T', '+', 'E'] },
        { LHS: 'T', RHS: ['int'] },
        { LHS: 'T', RHS: ['(', 'E', ')'] },
      ],
    };
    const cfg1 = new ContextFreeGrammar(spec as CFGSpec, t, nt);
    const sentence: Sentence = ['int', '+', 'int'].map((str) => ({
      name: str,
    }));
    this.bfsTree = getBFSTreeAsync(sentence, cfg1, interval(this.delay));
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
  itemToString(item: unknown | null): string {
    if (!item) {
      return '';
    }
    const it = item as Tree<PartialParseTree>;
    return it.node.sententialForm.toString();
  }
}
