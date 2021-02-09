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
  ll1GetChildren,
} from '@jlguenego/syntax-analysis';
import { DFSTreeAsync, Tree } from '@jlguenego/tree';
import { timer } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-ll1',
  templateUrl: './ll1.component.html',
  styleUrls: ['./ll1.component.scss'],
})
export class Ll1Component implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

  dfsTree!: DFSTreeAsync<unknown>;

  constructor(public utils: UtilsService) {
    const t = defineTerminalAlphabet(['+', '*', 'int', '(', ')'] as const);
    const nt = defineNonTerminalAlphabet(['E', 'Op'] as const);

    const spec: CFGSpecifications<typeof t, typeof nt> = {
      startSymbol: 'E',
      productions: [
        { LHS: 'E', RHS: ['int'] },
        { LHS: 'E', RHS: ['(', 'E', 'Op', 'E', ')'] },
        { LHS: 'Op', RHS: ['+'] },
        { LHS: 'Op', RHS: ['*'] },
      ],
    };
    const cfg1 = new ContextFreeGrammar(spec as CFGSpec, t, nt, {
      ll1: true,
    });
    const sentence: Sentence = '( int + ( int * int ) )'
      .split(' ')
      .map((str) => ({
        name: str,
      }));

    this.dfsTree = new DFSTreeAsync<PartialParseTree>(
      new PartialParseTree(new Tree<ParseSymbol>(cfg1.startSymbol)),
      testFnAsync(sentence),
      async (ppt: PartialParseTree) => {
        await timer(+this.f.value.delay).toPromise();
        return ll1GetChildren(sentence, cfg1)(ppt);
      }
    ) as DFSTreeAsync<unknown>;
  }

  ngOnInit(): void {}
}
