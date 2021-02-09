import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ll1Component } from './ll1.component';

const routes: Routes = [{ path: '', component: Ll1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ll1RoutingModule { }
