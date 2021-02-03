import { Component, Input, OnInit } from '@angular/core';
import { Tree } from '@jlguenego/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() tree!: Tree<string> | null;
  @Input() currentTree!: Tree<string> | null;

  constructor() {}

  ngOnInit(): void {}
}
