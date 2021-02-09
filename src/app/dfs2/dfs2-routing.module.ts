import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dfs2Component } from './dfs2.component';

const routes: Routes = [{ path: '', component: Dfs2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dfs2RoutingModule { }
