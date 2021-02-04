import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bfs1RoutingModule } from './bfs1-routing.module';
import { Bfs1Component } from './bfs1.component';
import { WidgetModule } from '../widget/widget.module';
import { Bfs1AnimComponent } from './bfs1-anim/bfs1-anim.component';

@NgModule({
  declarations: [Bfs1Component, Bfs1AnimComponent],
  imports: [CommonModule, Bfs1RoutingModule, WidgetModule, ReactiveFormsModule],
})
export class Bfs1Module {}
