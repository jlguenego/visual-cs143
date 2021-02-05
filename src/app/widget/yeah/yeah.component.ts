import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yeah',
  templateUrl: './yeah.component.html',
  styleUrls: ['./yeah.component.scss'],
})
export class YeahComponent implements OnInit {
  @Input() visible = false;

  constructor() {}

  ngOnInit(): void {}

  clear(): void {
    console.log('clear');
    this.visible = false;
  }
}
