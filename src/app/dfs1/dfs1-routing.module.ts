import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dfs1Component } from './dfs1.component';

const routes: Routes = [{ path: '', component: Dfs1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dfs1RoutingModule { }
