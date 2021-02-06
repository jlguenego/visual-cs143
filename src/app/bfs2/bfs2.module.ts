import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bfs2RoutingModule } from './bfs2-routing.module';
import { Bfs2Component } from './bfs2.component';


@NgModule({
  declarations: [Bfs2Component],
  imports: [
    CommonModule,
    Bfs2RoutingModule
  ]
})
export class Bfs2Module { }
