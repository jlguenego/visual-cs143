import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bfs2Component } from './bfs2.component';

const routes: Routes = [{ path: '', component: Bfs2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bfs2RoutingModule { }
