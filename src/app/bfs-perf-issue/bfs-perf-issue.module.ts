import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BfsPerfIssueRoutingModule } from './bfs-perf-issue-routing.module';
import { BfsPerfIssueComponent } from './bfs-perf-issue.component';


@NgModule({
  declarations: [BfsPerfIssueComponent],
  imports: [
    CommonModule,
    BfsPerfIssueRoutingModule
  ]
})
export class BfsPerfIssueModule { }
