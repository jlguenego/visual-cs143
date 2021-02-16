import { KPredictiveParser } from '@jlguenego/syntax-analysis';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-k-predictive-algo',
  templateUrl: './k-predictive-algo.component.html',
  styleUrls: ['./k-predictive-algo.component.scss'],
})
export class KPredictiveAlgoComponent implements OnInit {
  @Input() algo!: KPredictiveParser | null;

  constructor() {}

  ngOnInit(): void {}
}
