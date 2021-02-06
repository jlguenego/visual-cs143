import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-previous-next',
  templateUrl: './previous-next.component.html',
  styleUrls: ['./previous-next.component.scss'],
})
export class PreviousNextComponent implements OnInit {
  @Input() config = this.router.config;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  prevPath = '';
  nextPath = '';

  visible = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      console.log('event: ', event);
      console.log('this.config: ', this.config);
      const index = this.config.findIndex(
        (route) => '/' + route.path === event.url
      );
      console.log('index: ', index);
      if (index === -1) {
        this.visible = false;
        return;
      }
      this.visible = true;
      this.prevPath = '';
      this.nextPath = '';
      if (index > 0) {
        this.prevPath = this.config[index - 1].path as string;
      }
      if (index < this.config.length - 1) {
        this.nextPath = this.config[index + 1].path as string;
      }
    });
  }
}
