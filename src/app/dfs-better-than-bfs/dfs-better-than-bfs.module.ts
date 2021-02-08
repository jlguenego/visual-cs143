import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DfsBetterThanBfsRoutingModule } from './dfs-better-than-bfs-routing.module';
import { DfsBetterThanBfsComponent } from './dfs-better-than-bfs.component';


@NgModule({
  declarations: [DfsBetterThanBfsComponent],
  imports: [
    CommonModule,
    DfsBetterThanBfsRoutingModule
  ]
})
export class DfsBetterThanBfsModule { }
