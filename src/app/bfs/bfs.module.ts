import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BfsRoutingModule } from './bfs-routing.module';
import { BfsComponent } from './bfs.component';
import { BfsAnimComponent } from './bfs-anim/bfs-anim.component';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [BfsComponent, BfsAnimComponent],
  imports: [
    CommonModule,
    BfsRoutingModule,
    WidgetModule
  ]
})
export class BfsModule { }
