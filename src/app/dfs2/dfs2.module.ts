import { WidgetModule } from './../widget/widget.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dfs2RoutingModule } from './dfs2-routing.module';
import { Dfs2Component } from './dfs2.component';

@NgModule({
  declarations: [Dfs2Component],
  imports: [CommonModule, Dfs2RoutingModule, ReactiveFormsModule, WidgetModule],
})
export class Dfs2Module {}
