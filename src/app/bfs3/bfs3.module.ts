import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bfs3RoutingModule } from './bfs3-routing.module';
import { Bfs3Component } from './bfs3.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Bfs3Component],
  imports: [CommonModule, Bfs3RoutingModule, WidgetModule, ReactiveFormsModule],
})
export class Bfs3Module {}
