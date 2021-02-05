import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { StackComponent } from './stack/stack.component';
import { CollapseComponent } from './collapse/collapse.component';
import { YeahComponent } from './yeah/yeah.component';

@NgModule({
  declarations: [TreeComponent, StackComponent, CollapseComponent, YeahComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TreeComponent, StackComponent, CollapseComponent, YeahComponent],
})
export class WidgetModule {}
