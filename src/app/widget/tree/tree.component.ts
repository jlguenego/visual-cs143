import { Component, Input, OnInit } from '@angular/core';
import { Tree } from '@jlguenego/tree';

type ToStringFn = (o: unknown) => string;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() tree!: Tree<unknown> | null;
  @Input() currentTree!: Tree<unknown> | null;
  @Input() nodeToString: ToStringFn = (str: unknown) => str as string;

  constructor() {}

  ngOnInit(): void {}
}
