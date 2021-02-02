import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BfsComponent } from './bfs.component';

const routes: Routes = [{ path: '', component: BfsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BfsRoutingModule { }
