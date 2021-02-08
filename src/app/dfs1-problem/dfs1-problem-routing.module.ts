import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dfs1ProblemComponent } from './dfs1-problem.component';

const routes: Routes = [{ path: '', component: Dfs1ProblemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dfs1ProblemRoutingModule { }
