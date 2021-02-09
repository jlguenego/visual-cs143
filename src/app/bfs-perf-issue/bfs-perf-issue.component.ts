import { UtilsService } from './../services/utils.service';
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
} from '@jlguenego/syntax-analysis';
import { BFSTreeAsync } from '@jlguenego/tree';
import { interval } from 'rxjs';

@Component({
  selector: 'app-bfs-perf-issue',
  templateUrl: './bfs-perf-issue.component.html',
  styleUrls: ['./bfs-perf-issue.component.scss'],
})
export class BfsPerfIssueComponent implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });

  cs143 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';

  bfsTree!: BFSTreeAsync<unknown>;

  constructor(public utils: UtilsService) {
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
    const sentence: Sentence = ['c', ...new Array(6).fill('a')].map((str) => ({
      name: str,
    }));
    this.bfsTree = getBFS1TreeAsync(
      sentence,
      cfg1,
      interval(+this.f.value.delay)
    ) as BFSTreeAsync<unknown>;
  }

  ngOnInit(): void {}
}
