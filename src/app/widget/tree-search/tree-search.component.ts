import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-search',
  templateUrl: './tree-search.component.html',
  styleUrls: ['./tree-search.component.scss'],
})
export class TreeSearchComponent implements OnInit {
  @Input() delay = 1000;

  constructor() {}

  ngOnInit(): void {}
}
