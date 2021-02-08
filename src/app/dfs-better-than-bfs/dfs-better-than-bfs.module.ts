import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DfsBetterThanBfsRoutingModule } from './dfs-better-than-bfs-routing.module';
import { DfsBetterThanBfsComponent } from './dfs-better-than-bfs.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DfsBetterThanBfsComponent],
  imports: [
    CommonModule,
    DfsBetterThanBfsRoutingModule,
    ReactiveFormsModule,
    WidgetModule,
  ],
})
export class DfsBetterThanBfsModule {}
