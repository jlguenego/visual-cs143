import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bfs3Component } from './bfs3.component';

const routes: Routes = [{ path: '', component: Bfs3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bfs3RoutingModule { }
