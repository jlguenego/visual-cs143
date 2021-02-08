import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DfsBetterThanBfsComponent } from './dfs-better-than-bfs.component';

const routes: Routes = [{ path: '', component: DfsBetterThanBfsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DfsBetterThanBfsRoutingModule { }
