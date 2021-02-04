import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { StackComponent } from './stack/stack.component';
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  declarations: [TreeComponent, StackComponent, CollapseComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TreeComponent, StackComponent, CollapseComponent],
})
export class WidgetModule {}
