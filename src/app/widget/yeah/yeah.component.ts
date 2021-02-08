import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

@Component({
  selector: 'app-yeah',
  templateUrl: './yeah.component.html',
  styleUrls: ['./yeah.component.scss'],
})
export class YeahComponent implements OnInit, OnDestroy {
  private pVisible = false;

  @Input()
  get visible(): boolean {
    return this.pVisible;
  }
  set visible(value: boolean) {
    this.pVisible = value;
    // scroll lock
    if (this.pVisible) {
      disableBodyScroll(this.elt.nativeElement);
    } else {
      enableBodyScroll(this.elt.nativeElement);
    }
  }

  constructor(private elt: ElementRef<HTMLElement>) {}

  ngOnInit(): void {}

  clear(): void {
    enableBodyScroll(this.elt.nativeElement);
    clearAllBodyScrollLocks();
    this.visible = false;
  }

  ngOnDestroy(): void {
    clearAllBodyScrollLocks();
  }
}
