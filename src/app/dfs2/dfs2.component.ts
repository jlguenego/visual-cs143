import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  CFGSpec,
  CFGSpecifications,
  ContextFreeGrammar,
  defineNonTerminalAlphabet,
  defineTerminalAlphabet,
  dfs2GetChildren,
  ParseSymbol,
  PartialParseTree,
  Sentence,
  testFnAsync,
} from '@jlguenego/syntax-analysis';
import { DFSTreeAsync, Tree } from '@jlguenego/tree';
import { timer } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-dfs2',
  templateUrl: './dfs2.component.html',
  styleUrls: ['./dfs2.component.scss'],
})
export class Dfs2Component implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

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
    const sentence: Sentence = ['int', '+', '(', 'int', '+', 'int', ')'].map(
      (str) => ({
        name: str,
      })
    );

    this.dfsTree = new DFSTreeAsync<PartialParseTree>(
      new PartialParseTree(new Tree<ParseSymbol>(cfg1.startSymbol)),
      testFnAsync(sentence),
      async (ppt: PartialParseTree) => {
        await timer(+this.f.value.delay).toPromise();
        return dfs2GetChildren(sentence, cfg1)(ppt);
      }
    ) as DFSTreeAsync<unknown>;
  }

  ngOnInit(): void {}
}
