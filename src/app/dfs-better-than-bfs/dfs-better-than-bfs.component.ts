import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  defineTerminalAlphabet,
  defineNonTerminalAlphabet,
  CFGSpecifications,
  ContextFreeGrammar,
  CFGSpec,
  Sentence,
  getBFS1TreeAsync,
  PartialParseTree,
  dfs1GetChildren,
  ParseSymbol,
  testFnAsync,
} from '@jlguenego/syntax-analysis';
import { BFSTreeAsync, DFSTreeAsync, Tree } from '@jlguenego/tree';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-dfs-better-than-bfs',
  templateUrl: './dfs-better-than-bfs.component.html',
  styleUrls: ['./dfs-better-than-bfs.component.scss'],
})
export class DfsBetterThanBfsComponent implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  dfsTree!: DFSTreeAsync<unknown>;

  constructor() {
    const t = defineTerminalAlphabet(['a', 'b', 'c'] as const);
    const nt = defineNonTerminalAlphabet(['A'] as const);

    const spec: CFGSpecifications<typeof t, typeof nt> = {
      startSymbol: 'A',
      productions: [
        { LHS: 'A', RHS: ['A', 'a'] },
        { LHS: 'A', RHS: ['A', 'b'] },
        { LHS: 'A', RHS: ['c'] },
      ],
    };
    const cfg1 = new ContextFreeGrammar(spec as CFGSpec, t, nt);
    const sentence: Sentence = ['c', ...new Array(8).fill('a')].map((str) => ({
      name: str,
    }));
    this.dfsTree = new DFSTreeAsync<PartialParseTree>(
      new PartialParseTree(new Tree<ParseSymbol>(cfg1.startSymbol)),
      testFnAsync(sentence),
      async (ppt: PartialParseTree) => {
        await timer(+this.f.value.delay).toPromise();
        return dfs1GetChildren(sentence, cfg1)(ppt);
      }
    ) as DFSTreeAsync<unknown>;
  }

  ngOnInit(): void {}

  itemToString(item: unknown | null): string {
    if (!item) {
      return '';
    }
    const it = item as Tree<PartialParseTree>;
    return it.node.sententialForm.toString();
  }
}
