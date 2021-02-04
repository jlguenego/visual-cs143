import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent implements OnInit {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  closed = true;

  @Input() content!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    console.log('toggle', this.content);
    this.closed = !this.closed;
  }
}
