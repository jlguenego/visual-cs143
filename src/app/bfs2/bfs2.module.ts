import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bfs2RoutingModule } from './bfs2-routing.module';
import { Bfs2Component } from './bfs2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Bfs2Component],
  imports: [CommonModule, Bfs2RoutingModule, WidgetModule, ReactiveFormsModule],
})
export class Bfs2Module {}
