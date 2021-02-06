import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  prevPath!: string;
  nextPath!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  previous(): void {}
  next(): void {}
}
