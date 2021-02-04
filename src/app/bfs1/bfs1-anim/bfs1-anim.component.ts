import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
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
import { interval, Subject } from 'rxjs';
import { PartialParseTree } from '@jlguenego/syntax-analysis';

@Component({
  selector: 'app-bfs1-anim',
  templateUrl: './bfs1-anim.component.html',
  styleUrls: ['./bfs1-anim.component.scss'],
})
export class Bfs1AnimComponent implements OnInit, OnDestroy {
  stack$ = new Subject<{ node: string }[]>();
  tree$ = new Subject<Tree<PartialParseTree>>();
  currentValue$ = new Subject<Tree<PartialParseTree>>();

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
    const t = defineTerminalAlphabet(['+', 'int'] as const);
    const nt = defineNonTerminalAlphabet(['S', 'E', 'F'] as const);

    const spec: CFGSpecifications<typeof t, typeof nt> = {
      startSymbol: 'S',
      productions: [
        { LHS: 'S', RHS: ['E'] },
        { LHS: 'E', RHS: ['F'] },
        { LHS: 'E', RHS: ['E', '+', 'F'] },
        { LHS: 'F', RHS: ['int'] },
      ],
    };
    const cfg1 = new ContextFreeGrammar(spec as CFGSpec, t, nt);
    const sentence: Sentence = ['int', '+', 'int'].map((str) => ({
      name: str,
    }));
    this.bfsTree = getBFSTreeAsync(sentence, cfg1, interval(1000));
    this.bfsTree.subject.subscribe((info) => {
      console.log('info: ', info);
      this.zone.run(() => {
        this.stack$.next(
          info.stack.map((tr) => ({ node: tr.node.sententialForm.toString() }))
        );
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

  nodeToString(node: unknown): string {
    return (node as PartialParseTree)?.sententialForm.toString();
  }
}
