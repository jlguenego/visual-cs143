import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { StackComponent } from './stack/stack.component';
import { CollapseComponent } from './collapse/collapse.component';
import { YeahComponent } from './yeah/yeah.component';
import { PreviousNextComponent } from './previous-next/previous-next.component';

@NgModule({
  declarations: [
    TreeComponent,
    StackComponent,
    CollapseComponent,
    YeahComponent,
    PreviousNextComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [
    TreeComponent,
    StackComponent,
    CollapseComponent,
    YeahComponent,
    PreviousNextComponent,
  ],
})
export class WidgetModule {}
