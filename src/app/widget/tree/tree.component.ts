import { Component, Input, OnInit } from '@angular/core';
import { Tree } from '@jlguenego/tree';

type ItemToStringFn = (o: unknown) => string;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() tree!: Tree<unknown> | null;
  @Input() currentTree!: Tree<unknown> | null;
  @Input() itemToString: ItemToStringFn = (item: unknown) =>
    // tslint:disable-next-line: semicolon
    (item as { node: string }).node.toString();

  constructor() {}

  ngOnInit(): void {}
}
