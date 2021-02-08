import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dfs1RoutingModule } from './dfs1-routing.module';
import { Dfs1Component } from './dfs1.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Dfs1Component],
  imports: [CommonModule, Dfs1RoutingModule, ReactiveFormsModule, WidgetModule],
})
export class Dfs1Module {}
