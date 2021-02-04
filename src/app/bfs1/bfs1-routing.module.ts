import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bfs1Component } from './bfs1.component';

const routes: Routes = [{ path: '', component: Bfs1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bfs1RoutingModule { }
