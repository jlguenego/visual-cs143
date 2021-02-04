import {
  animate,
  AUTO_STYLE,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: '0', visibility: 'hidden' }),
        animate(
          '0.5s ease-out',
          style({ height: AUTO_STYLE, visibility: AUTO_STYLE })
        ),
      ]),
      transition(':leave', [
        style({ height: AUTO_STYLE, visibility: AUTO_STYLE }),
        animate('0.5s ease-in', style({ height: '0', visibility: 'hidden' })),
      ]),
    ]),
  ],
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
