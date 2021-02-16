import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { StackComponent } from './stack/stack.component';
import { CollapseComponent } from './collapse/collapse.component';
import { YeahComponent } from './yeah/yeah.component';
import { PreviousNextComponent } from './previous-next/previous-next.component';
import { TreeSearchComponent } from './tree-search/tree-search.component';
import { KPredictiveAlgoComponent } from './k-predictive-algo/k-predictive-algo.component';

@NgModule({
  declarations: [
    TreeComponent,
    StackComponent,
    CollapseComponent,
    YeahComponent,
    PreviousNextComponent,
    TreeSearchComponent,
    KPredictiveAlgoComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, ReactiveFormsModule],
  exports: [
    TreeComponent,
    StackComponent,
    CollapseComponent,
    YeahComponent,
    PreviousNextComponent,
    TreeSearchComponent,
    ReactiveFormsModule,
    KPredictiveAlgoComponent,
  ],
})
export class WidgetModule {}
