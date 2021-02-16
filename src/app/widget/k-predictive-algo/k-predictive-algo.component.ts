import { timer } from 'rxjs';
import {
  KPredictiveParser,
  NonTerminal,
  ParseSymbol,
  ParsingResultEnum,
  ParsingResultRule,
} from '@jlguenego/syntax-analysis';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-k-predictive-algo',
  templateUrl: './k-predictive-algo.component.html',
  styleUrls: ['./k-predictive-algo.component.scss'],
})
export class KPredictiveAlgoComponent implements OnInit {
  @Input() algo!: KPredictiveParser | null;
  @Input() delay = 50;

  firstTime = true;
  parsing = false;
  interrupted = false;

  constructor() {}

  ngOnInit(): void {}

  start(): void {
    const algo = this.algo;
    if (!algo) {
      return;
    }
    this.firstTime = false;
    if (this.parsing === false) {
      this.algo?.reset();
      this.parsing = true;
    }

    (async () => {
      while (!algo.isFinished) {
        console.log('this.delay: ', this.delay);
        await timer(this.delay).toPromise();
        if (this.interrupted) {
          break;
        }
        algo.move();
        if (algo.isFinished) {
          this.parsing = false;
          break;
        }
      }
    })();
  }

  stop(): void {
    this.interrupted = true;
  }

  symbolToString(s: ParseSymbol): string {
    if (s instanceof NonTerminal) {
      return s.label;
    }
    return s.name;
  }

  nextMove(): string {
    const algo = this.algo;
    if (!algo) {
      return '';
    }
    const X = algo.pushdownList[0];
    const u = algo.getLookaheadString();
    const M = algo.parsingTable;
    const nextMove = M(X, u);
    if (nextMove instanceof ParsingResultRule) {
      return `{ ${nextMove.beta}, ${nextMove.i}}`;
    }

    if (nextMove === ParsingResultEnum.POP) {
      return 'pop';
    }
    if (nextMove === ParsingResultEnum.ACCEPT) {
      return 'accept';
    }
    if (nextMove === ParsingResultEnum.ERROR) {
      return 'error';
    }
    throw new Error('unexpected');
  }
}
