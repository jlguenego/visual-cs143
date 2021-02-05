import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

type ItemToStringFn = (item: unknown) => string;

const height = '2em';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ height, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height, opacity: 1 }),
        animate('0.5s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class StackComponent implements OnInit {
  @Input() stack!: unknown[] | null;
  @Input() itemToString: ItemToStringFn = (item: unknown | null) => {
    if (!item) {
      return '';
    }
    return (item as { node: string }).node.toString();
    // tslint:disable-next-line: semicolon
  };

  constructor() {}

  ngOnInit(): void {}
}
