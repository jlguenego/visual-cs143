import { UtilsService } from './../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CFGSpec,
  CFGSpecifications,
  ContextFreeGrammar,
  defineNonTerminalAlphabet,
  defineTerminalAlphabet,
  dfs1GetChildren,
  ParseSymbol,
  PartialParseTree,
  Sentence,
  testFnAsync,
} from '@jlguenego/syntax-analysis';
import { DFSTreeAsync, Tree } from '@jlguenego/tree';
import { timer } from 'rxjs';

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

  constructor(public utils: UtilsService) {
    const t = defineTerminalAlphabet(['+', 'int', '(', ')'] as const);
    const nt = defineNonTerminalAlphabet(['E', 'T'] as const);

    const spec: CFGSpecifications<typeof t, typeof nt> = {
      startSymbol: 'E',
      productions: [
        { LHS: 'E', RHS: ['T', '+', 'E'] },
        { LHS: 'E', RHS: ['T'] },
        { LHS: 'T', RHS: ['int'] },
        { LHS: 'T', RHS: ['(', 'E', ')'] },
      ],
    };
    const cfg1 = new ContextFreeGrammar(spec as CFGSpec, t, nt);
    const sentence: Sentence = ['int', '+', 'int'].map((str) => ({
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
}
