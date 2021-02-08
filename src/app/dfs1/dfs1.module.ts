import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dfs1RoutingModule } from './dfs1-routing.module';
import { Dfs1Component } from './dfs1.component';


@NgModule({
  declarations: [Dfs1Component],
  imports: [
    CommonModule,
    Dfs1RoutingModule
  ]
})
export class Dfs1Module { }
