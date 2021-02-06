import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  PartialParseTree,
  defineTerminalAlphabet,
  defineNonTerminalAlphabet,
  CFGSpecifications,
  ContextFreeGrammar,
  CFGSpec,
  Sentence,
  getBFS3TreeAsync,
} from '@jlguenego/syntax-analysis';
import { BFSTreeAsync } from '@jlguenego/tree';
import { interval } from 'rxjs';

@Component({
  selector: 'app-bfs3',
  templateUrl: './bfs3.component.html',
  styleUrls: ['./bfs3.component.scss'],
})
export class Bfs3Component implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  bfsTree!: BFSTreeAsync<PartialParseTree>;

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
    this.bfsTree = getBFS3TreeAsync(
      sentence,
      cfg1,
      interval(+this.f.value.delay)
    );
  }

  ngOnInit(): void {}
}
