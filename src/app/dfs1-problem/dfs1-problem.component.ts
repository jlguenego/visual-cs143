import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  defineTerminalAlphabet,
  defineNonTerminalAlphabet,
  CFGSpecifications,
  ContextFreeGrammar,
  CFGSpec,
  Sentence,
  PartialParseTree,
  ParseSymbol,
  testFnAsync,
  dfs1GetChildren,
} from '@jlguenego/syntax-analysis';
import { DFSTreeAsync, Tree } from '@jlguenego/tree';
import { timer } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-dfs1-problem',
  templateUrl: './dfs1-problem.component.html',
  styleUrls: ['./dfs1-problem.component.scss'],
})
export class Dfs1ProblemComponent implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  dfsTree!: DFSTreeAsync<unknown>;

  constructor(public utils: UtilsService) {
    const t = defineTerminalAlphabet(['a', 'c'] as const);
    const nt = defineNonTerminalAlphabet(['A', 'B'] as const);

    const spec: CFGSpecifications<typeof t, typeof nt> = {
      startSymbol: 'A',
      productions: [
        { LHS: 'A', RHS: [] },
        { LHS: 'A', RHS: ['c'] },
        { LHS: 'A', RHS: ['A', 'a'] },
      ],
    };
    const cfg1 = new ContextFreeGrammar(spec as CFGSpec, t, nt);
    const emptyProd = cfg1.hasEmptyProduction();
    console.log('emptyProd: ', emptyProd);
    const sentence: Sentence = ['c'].map((str) => ({
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
