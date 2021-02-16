import { UtilsService } from './../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CFGSpecifications,
  ContextFreeGrammar,
  defineNonTerminalAlphabet,
  defineTerminalAlphabet,
  KPredictiveParser,
  Sentence,
} from '@jlguenego/syntax-analysis';

@Component({
  selector: 'app-llk',
  templateUrl: './llk.component.html',
  styleUrls: ['./llk.component.scss'],
})
export class LlkComponent implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

  algo!: KPredictiveParser;
  constructor(public utils: UtilsService) {
    const t = defineTerminalAlphabet(['a', 'b'] as const);
    const nt = defineNonTerminalAlphabet(['S', 'A'] as const);

    // this grammar is not LL(1), it is LL(2) because the LL2 table can be built, but not strong LL(2).
    const spec: CFGSpecifications<typeof t, typeof nt> = {
      nt,
      t,
      productions: [
        { LHS: 'S', RHS: ['a', 'A', 'a', 'a'] },
        { LHS: 'S', RHS: ['b', 'A', 'b', 'a'] },
        { LHS: 'A', RHS: [] },
        { LHS: 'A', RHS: ['b'] },
      ],
      startSymbol: 'S',
    };
    const cfg = new ContextFreeGrammar(spec);

    const sentence: Sentence = 'abaa'.split('').map((str) => ({
      name: str,
    }));

    const k = 2;
    this.algo = new KPredictiveParser(cfg, k, sentence);
  }

  ngOnInit(): void {}
}
