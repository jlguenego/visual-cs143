import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BfsRoutingModule } from './bfs-routing.module';
import { BfsComponent } from './bfs.component';


@NgModule({
  declarations: [BfsComponent],
  imports: [
    CommonModule,
    BfsRoutingModule
  ]
})
export class BfsModule { }
