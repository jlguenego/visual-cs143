import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bfs1RoutingModule } from './bfs1-routing.module';
import { Bfs1Component } from './bfs1.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [Bfs1Component],
  imports: [CommonModule, Bfs1RoutingModule, WidgetModule, ReactiveFormsModule],
})
export class Bfs1Module {}
