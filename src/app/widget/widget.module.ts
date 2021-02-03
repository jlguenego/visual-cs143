import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { StackComponent } from './stack/stack.component';



@NgModule({
  declarations: [TreeComponent, StackComponent],
  imports: [
    CommonModule
  ],
  exports: [TreeComponent, StackComponent]
})
export class WidgetModule { }
