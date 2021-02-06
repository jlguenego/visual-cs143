import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BfsRoutingModule } from './bfs-routing.module';
import { BfsComponent } from './bfs.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [BfsComponent],
  imports: [CommonModule, BfsRoutingModule, WidgetModule, ReactiveFormsModule],
})
export class BfsModule {}
