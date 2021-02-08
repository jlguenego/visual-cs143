import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BfsPerfIssueComponent } from './bfs-perf-issue.component';

const routes: Routes = [{ path: '', component: BfsPerfIssueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BfsPerfIssueRoutingModule { }
