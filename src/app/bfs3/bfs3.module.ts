import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bfs3RoutingModule } from './bfs3-routing.module';
import { Bfs3Component } from './bfs3.component';


@NgModule({
  declarations: [Bfs3Component],
  imports: [
    CommonModule,
    Bfs3RoutingModule
  ]
})
export class Bfs3Module { }
