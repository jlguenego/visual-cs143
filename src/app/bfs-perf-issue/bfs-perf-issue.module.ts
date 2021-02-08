import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BfsPerfIssueRoutingModule } from './bfs-perf-issue-routing.module';
import { BfsPerfIssueComponent } from './bfs-perf-issue.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BfsPerfIssueComponent],
  imports: [
    CommonModule,
    BfsPerfIssueRoutingModule,
    ReactiveFormsModule,
    WidgetModule,
  ],
})
export class BfsPerfIssueModule {}
