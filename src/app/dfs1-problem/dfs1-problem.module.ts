import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dfs1ProblemRoutingModule } from './dfs1-problem-routing.module';
import { Dfs1ProblemComponent } from './dfs1-problem.component';


@NgModule({
  declarations: [Dfs1ProblemComponent],
  imports: [
    CommonModule,
    Dfs1ProblemRoutingModule
  ]
})
export class Dfs1ProblemModule { }
