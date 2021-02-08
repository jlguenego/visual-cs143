import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CFGSpec,
  CFGSpecifications,
  ContextFreeGrammar,
  defineNonTerminalAlphabet,
  defineTerminalAlphabet,
  getDFS1TreeAsync,
  PartialParseTree,
  Sentence,
} from '@jlguenego/syntax-analysis';
import { DFSTreeAsync, Tree } from '@jlguenego/tree';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dfs1',
  templateUrl: './dfs1.component.html',
  styleUrls: ['./dfs1.component.scss'],
})
export class Dfs1Component implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  dfsTree!: DFSTreeAsync<unknown>;

  constructor() {
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
    this.dfsTree = getDFS1TreeAsync(
      sentence,
      cfg1,
      interval(+this.f.value.delay)
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
